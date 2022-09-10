import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList },
    template: `
    
        <section class="space-y-6">
            <assignment-list :assignments="filters.inprogress" title="In Progress"></assignment-list>
            
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

            <form class="text-black" @submit.prevent="add">
                <div class="border border-gray-600">
                    <input v-model="newAssignment" type="text" placeholder="New Assignment..." class="p-2" />
                    <button type="submit" class="bg-white p-2 border-l">Add</button>
                </div>
            </form>
        </section>
    
    `,

    data() {
        return {
            assignments: [
                { name: 'Finish Learning Vue', complete: false, id:'1'},
                { name: 'Finish Learning Vuex', complete: false, id:'2'},
                { name: 'Work on VueFileManager', complete: false, id:'3'},
            ],
            newAssignment: '',
        }
    },

    computed: {
        filters() {
            return {
                inprogress: this.assignments.filter(a => !a.complete),
                completed: this.assignments.filter(a => a.complete)
            }
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
        }
    },

}
