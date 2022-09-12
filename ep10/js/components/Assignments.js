import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
    
        <section class="space-y-6">
            <assignment-list :assignments="filters.inprogress" title="In Progress"></assignment-list>
            
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

            <assignment-create @add="add"></assignment-create>
        </section>
    
    `,

    data() {
        return {
            assignments: [
                { name: 'Finish Learning Vue', complete: false, id:'1', tag: 'coding'},
                { name: 'Finish Learning Vuex', complete: false, id:'2', tag: 'coding'},
                { name: 'Work on VueFileManager', complete: false, id:'3', tag: 'office'},
                { name: 'Meeting with DK', complete: false, id:'4', tag: 'events'},
            ],
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
        add(name) {
            this.assignments.push({
                name: name ,
                completed: false,
                id: this.assignments.length + 1
            });
        }
    },

}

