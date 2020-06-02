/* Javascript version of cntdn
 *
 * Countdown game solver
 *
 * James Stanley 2014
 */

let bestresult
let childs
let bestvalsums;


const OPS = {
    "+": (n1, n2) => { if (n1 < 0 || n2 < 0) return false; return n1+n2; },
    "-": (n1, n2) => { if (n2 >= n1) return false; return n1-n2; },
    "_": (n2, n1) => { if (n2 >= n1) return false; return n1-n2; },
    "*": (n1, n2) => { return n1*n2; },
    "/": (n1, n2) => { if (n2 == 0 || n1%n2 != 0) return false; return n1/n2; },
    "?": (n2, n1) => { if (n2 == 0 || n1%n2 != 0) return false; return n1/n2; },
};

const OPCOST = {
    "+": 1,
    "-": 1.05,
    "_": 1.05,
    "*": 1.2,
    "/": 1.3,
    "?": 1.3,
};

const _recurse_solve_numbers = (numbers, searchedi, was_generated, target, levels, valsums, trickshot) => {
    levels--;

    for (let i = 0; i < numbers.length-1; i++) {
        let ni = numbers[i];

        if (ni === false)
            continue;

        numbers[i] = false;

        for (let j = i+1; j < numbers.length; j++) {
            let nj = numbers[j];

            if (nj === false)
                continue;

            if (i < searchedi && !was_generated[i] && !was_generated[j])
                continue;

            for (let o in OPS) {
                let r = OPS[o](ni[0], nj[0]);
                if (r === false)
                    continue;

                let op_cost = Math.abs(r);
                while (op_cost % 10 == 0 && op_cost != 0)
                    op_cost /= 10;
                if ((ni[0] == 10 || nj[0] == 10) && o == '*') // HACK: multiplication by 10 is cheap
                    op_cost = 1;
                op_cost *= OPCOST[o];

                let newvalsums = valsums + op_cost;

                if ((Math.abs(r - target) < Math.abs(bestresult[0] - target))
                        || (Math.abs(r - target) == Math.abs(bestresult[0] - target) && (trickshot || newvalsums < bestvalsums))) {
                    bestresult = [r,o,ni,nj];
                    bestvalsums = newvalsums;
                }

                numbers[j] = [r, o, ni, nj];
                let old_was_gen = was_generated[j];
                was_generated[j] = true;

                if (levels > 0 && (trickshot || bestresult[0] != target || newvalsums < bestvalsums))
                    _recurse_solve_numbers(numbers, i+1, was_generated, target, levels, newvalsums, trickshot);

                was_generated[j] = old_was_gen;
                numbers[j] = nj;
            }
        }

        numbers[i] = ni;
    }
}

const tidyup_result = (result) => {
    let mapping = {
        "?": "/", "_": "-"
    };

    let swappable = {
        "*": true, "+": true
    };

    if (result.length < 4)
        return result;

    for (let i = 2; i < result.length; i++) {
        let child = result[i];

        child = tidyup_result(child);

        if (child[1] == result[1] && swappable[result[1]]) {
            result.splice(i--, 1);
            result = result.concat(child.slice(2));
        } else {
            result[i] = child;
        }
    }

    if (result[1] in mapping) {
        result[1] = mapping[result[1]];
        let j = result[2];
        result[2] = result[3];
        result[3] = j;
    } else if (swappable[result[1]]) {
        childs = result.slice(2).sort((a,b) => { return b[0] - a[0]; });
        for (let i = 2; i < result.length; i++)
            result[i] = childs[i-2];
    }

    return result;
}

const fullsize = (array) => {
    if (array.constructor != Array)
        return 0;

    let l = 0;

    for (let i = 0; i < array.length; i++)
        l += fullsize(array[i]);

    return l + array.length;
}

const serialise_result = (result) => {
    let childparts = [];

    for (let i = 2; i < result.length; i++) {
        let child = result[i];

        if (child.length >= 4)
            childparts.push(serialise_result(child));
    }

    childparts = childparts.sort((a,b) => fullsize(b) - fullsize(a));

    let parts = [];
    for (let i = 0; i < childparts.length; i++) {
        parts = parts.concat(childparts[i]);
    }

    let sliced = result.slice(2).map((l) => l[0]);
    let thispart = [result[0], result[1]].concat(sliced);

    return parts.concat([thispart]);
}

const stringify_result = (serialised, target) => {
    let output = '';

    serialised = serialised.slice(0);

    for (let i = 0; i < serialised.length; i++) {
        let x = serialised[i];

        let args = x.slice(2);
        output += args.join(' ' + x[1] + ' ') + ' = ' + x[0] + '\n';
    }

    let result = serialised[serialised.length-1][0];
    if (result != target) {
        output += '(off by ' + (Math.abs(result - target)) + ')\n';
    }

    output = output
        .replace(/\*/g, '&times;')
        .replace(/\//g, '&divide;')

    return output;
}

const _solve_numbers = (numbers, target, trickshot) => {
    numbers = numbers.map((x) => { return [x, false] });

    let was_generated = [];
    for (let i = 0; i < numbers.length; i++)
        was_generated.push(false);

    bestresult = [0, 0];

    /* attempt to solve with dfs */
    _recurse_solve_numbers(numbers, 0, was_generated, target, numbers.length, 0, trickshot);

    return bestresult;
}

export const solve_numbers = (numbers, target, trickshot) => {
    numbers.sort();
    bestresult = [numbers[0], numbers[0]];

    /* see if one of these numbers is the answer; with trickshot you'd rather
     * have an interesting answer that's close than an exact answer
     */
    if (!trickshot) {
        for (let i = 1; i < numbers.length; i++) {
            if (Math.abs(numbers[i] - target) < Math.abs(bestresult[0] - target)) {
                bestresult = [numbers[i], numbers[i]];
                bestvalsums = numbers[i];
            }
        }
        if (bestresult[0] == target)
            return target + " = " + target;
    }

    return stringify_result(serialise_result(tidyup_result(_solve_numbers(numbers, target, trickshot))), target);
}