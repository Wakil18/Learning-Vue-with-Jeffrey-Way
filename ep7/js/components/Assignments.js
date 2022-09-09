import AssignmentList from "./AssignmentList.js";

export default {

    components: { AssignmentList },

    template: `

    <assignment-list :assignments="inprogressAssignments" title:"In Progress"></assignment-list>

    <assignment-list :assignments="completedAssignments" title:"Completed"></assignment-list>
    
    

    // <section class="mt-8" 
    //     v-show="completedAssignments.length"
    // >
    //     <h2 class="font-bold mb-2">Completed</h2>

    //     <ul>
    //         <li 
    //             v-for="assignment in completedAssignments" 
    //             :key="assignment.id"
    //         >
    //             <label>
    //                 {{ assignment.name }}
    //                 <input type="checkbox" v-model="assignment.complete">
    //             </label>
    //         </li>
    //     </ul>
    
    // </section>

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
        inprogressAssignments(){
            return this.assignments.filter(a => !a.complete);
        },
        completedAssignments(){
            return this.assignments.filter(a => a.complete)
        }
    }
}