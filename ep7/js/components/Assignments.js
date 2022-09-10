import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList },
    template: `
    
        <section class="space-y-6">
            <assignment-list :assignments="filters.inprogress" title="In Progress"></assignment-list>
            
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
        </section>
    
    `,

    data() {
        return {
            assignments: [
                { name: 'Finish Learning Vue', complete: false, id:'1'},
                { name: 'Finish Learning Vuex', complete: false, id:'2'},
                { name: 'Work on VueFileManager', complete: false, id:'3'},
            ]
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

}
