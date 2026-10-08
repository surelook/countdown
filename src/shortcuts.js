// Each shortcut presses the first visible button matching `target`, so the
// hidden boards and hidden clock buttons scope themselves.
export const GLOBAL_SHORTCUTS = [
    { key: ' ', label: 'Space', description: 'Start / Pause Clock', target: '[value="play"], [value="pause"]' },
    { key: 'r', label: 'R', description: 'Reset Clock', target: '[value="reset"]' },
    { key: 'f', label: 'F', description: 'Fullscreen', target: '[value="fullscreen"]' },
    { key: '/', label: '/', description: 'Shortcuts', target: '[value="shortcuts"]' }
];

export const ALL_BOARD_SHORTCUTS = [
    { key: 'Enter', label: 'Enter', description: 'Reveal the Answer', target: 'letter-board [value="solve"], number-board [value="solve"], conundrum-board [value="reveal"]' },
    { key: 'Backspace', label: 'Backspace', description: 'Clear Board', target: '[value="clear"]' }
];

export const BOARDS = [
    {
        name: 'Letters',
        value: 'letters',
        select: { key: '1', label: '1', description: 'Letters', target: '[value="letters"]' },
        shortcuts: [
            { key: 'c', label: 'C', description: 'Consonant', target: 'letter-board [value="consonant"]' },
            { key: 'v', label: 'V', description: 'Vowel', target: 'letter-board [value="vowel"]' }
        ]
    },
    {
        name: 'Numbers',
        value: 'numbers',
        select: { key: '2', label: '2', description: 'Numbers', target: '[value="numbers"]' },
        shortcuts: [
            { key: 'l', label: 'L', description: 'Large', target: 'number-board [value="large"]' },
            { key: 's', label: 'S', description: 'Small', target: 'number-board [value="small"]' },
            { key: 't', label: 'T', description: 'Target', target: 'number-board [value="target"]' }
        ]
    },
    {
        name: 'Conundrum',
        value: 'conundrum',
        select: { key: '3', label: '3', description: 'Conundrum', target: '[value="conundrum"]' },
        shortcuts: [
            { key: 'n', label: 'N', description: 'New Conundrum', target: 'conundrum-board [value="new"]' }
        ]
    }
];

export const SHORTCUTS = [
    ...GLOBAL_SHORTCUTS,
    ...ALL_BOARD_SHORTCUTS,
    ...BOARDS.flatMap(board => [board.select, ...board.shortcuts])
];
