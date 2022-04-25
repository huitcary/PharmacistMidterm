<template>
  <h1>Pharmacist Details</h1> 
  <hr>
  <div class="row">
      <div class="col-md-4">
          <table class="table table-striped">
              <tr>
                  <th>ID</th><td>{{pharmacists.id}}</td>
              </tr>
                <tr>
                  <th>Last Name</th><td>{{pharmacists.lastName}}</td>
              </tr>
                <tr>
                  <th>First Name</th><td>{{pharmacists.firstName}}</td>
              </tr>
                <tr>
                  <th>Address</th><td>{{pharmacists.address}}</td>
              </tr>
                <tr>
                  <th>Assigned Company</th><td>{{pharmacists.assignedCompany}}</td>
              </tr>
          </table>
      </div>
  </div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
            pharmacist: null
        }
    },
    mounted(){
       fetch('http://localhost:8000/api/pharmacists/')
        .then(res=>res.json())
        .then(data=> this.pharmacists = data)
        .catch(err=>console.log(err))
    }
}
</script>

<style>

</style>