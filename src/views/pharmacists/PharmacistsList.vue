<template>
  <div>
      <h1>List of Pharmacists</h1>
      <hr>
      <div class="row">
          <div class="col-md-3">
              <h4>Pharmacist Entry</h4>
              <form @submit.prevent="addPharmacist()">
                  <div class="mb-3">
                      <label for="lastName">Last Name</label>
                      <input type="text" v-model="pharmacist.lastName" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="firstName">First Name</label>
                      <input type="text" v-model="pharmacist.firstName" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="address">Address</label>
                      <input type="text" v-model="pharmacist.address" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="assignedCompany">Assigned Company</label>
                      <input type="text" v-model="pharmacist.assignedCompany" class="form-control">
                  </div>
                  <button type="submit" class="btn btn-primary">Save Pharmacist</button>
              </form>
          </div>
          <div class="col-md-9">
              <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Address</th>
                        <th>Assigned Company</th>
                        <th>..</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="pharmacist in pharmacists" :key="pharmacist.id">
                        <td>{{pharmacist.lastName}}</td>
                        <td>{{pharmacist.firstName}}</td>
                        <td>{{pharmacist.address}}</td>
                        <td>{{pharmacist.assignedCompany}}</td>
                        <td>
                            <router-link :to= "{name: 'viewPharmacist', params: {id: pharmacist.id}}" class= "btn btn-secondary btn-sm">
                                Open
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            pharmacist: {
                id:null,
                lastName: '',
                firstName: '',
                address: '',
                assignedCompany: ''
            },
            pharmacists: []       
        }
    },
    methods: {
        addPharmacists() {


            },
            getData(){
                fetch('http://localhost:8000/api/pharmacists')
                .then(res=>res.json())
                .then(data=> this.pharmacists = data)
                .catch(err=>console.log(err))
            }
    
        },
        mounted() {
            this.getData();
        }
    
}
</script>

<style>

</style>