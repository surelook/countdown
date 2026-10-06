const SETS = {
    classic: () => import('./classic-conundrums.json'),
    cats: () => import('./cats-conundrums.json')
};

export const loadConundrums = async (set) => (await SETS[set]()).default;
