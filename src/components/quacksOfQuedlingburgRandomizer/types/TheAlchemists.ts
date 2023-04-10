const ILLNESSES = [
    'Nervousness',
    'Ear worm',
    'Carrot Nose',
    'Wing ears',
    'Chicken eyes',
    'Witch\'s hump',
    'Forgetfulness',
    'Vampirism'
] as const;
export type Illness = typeof ILLNESSES[number];
