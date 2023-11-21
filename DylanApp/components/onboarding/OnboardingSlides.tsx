export type ItemsSlidesType = {
    id: string;
    image: any;
    title: string;
    description: string;
};

export const onboardingSlides : Array<ItemsSlidesType> = [
    {
        id: '1',
        title: 'Welcome to Dylan!',
        description: 'With our easy-to-use app, you can browse profiles, send messages, and arrange meetups with other dog owners in your area.',
        image: require('../../assets/images/doggy-icons/doggy-hearts.png'),
    },
    {
        id: '2',
        title: "Create your dog's profile.",
        description: "Include information about your dog's breed, size, temperament, energy level, and play style.",
        image: require('../../assets/images/doggy-icons/doggy-phone.png'),
    },
    {
        id: '3',
        title: 'Start swiping!',
        description: "Once you've created your dog's profile, you can start swiping through potential matches.",
        image: require('../../assets/images/doggy-icons/doggy-couple.png'),
    },
    {
        id: '4',
        title: 'Welcome to Dylan!',
        description: "Dylan is the dog dating app that makes finding furry friends fun and easy.",
        image: require('../../assets/images/doggy-icons/doggy-welcome.png'),
    },
]