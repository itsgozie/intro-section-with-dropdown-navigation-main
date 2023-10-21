const app = Vue.createApp({
    data() {
        return {
            heading: 'Make remote work alive',
            links: ['Home', 'About', 'Pricing', 'Plan', 'Contants'],
            firstName: 'Emma',
            LastName: 'May',
            url: [
                {
                    home: 'index.html',
                    about: 'about.html',
                    pricing: 'pricing.html',
                    plan: 'plan.html',
                    contact: 'contact.html'
                }
            ],
            urlName: ['Home', 'About', 'Pricing', 'Plan', 'Contact']
        };
    },
    methods: {
        heroHeading() {
            return 'Make remote work'
        }
    }
}).mount('body');

document.getElementById('btn').addEventListener('click', onclick);

function onclick() {
    console.log('CTA clicked');
}

