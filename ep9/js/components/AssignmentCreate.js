export default {
    template: `
    
        <form class="text-black" @submit.prevent="add">
            <div class="border border-gray-600">
                <input v-model="newAssignment" type="text" placeholder="New Assignment..." class="p-2" />
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>

    `,

    props: {
        assignments: Array
    },

    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add() {
            this.assignments.push({
                name: this.newAssignment,
                completed: false,
                id: this.assignments.length + 1
            });
            this.newAssignment = '';
        },
    },
}
