<template>
  <div>
    <h1>Please Register</h1>
    <form class="form-horizontal" role="form">
      <div class="form-group">
        <!--Text field-->
        <label for="email" class="col-md-2 control-label">Email</label>
        <div class="col-md-4">
          <input v-model="controller.email"
                 v-validate data-vv-rules="required|email"
                 type="text"
                 class="form-control"
                 name="email"
                 placeholder="Email"
                 focus="1"/>
          <span class="text-danger" v-if="errors.has('email')"><br/>
            <span>{{errors.first('email')}}</span>
          </span>
        </div>
      </div>

      <div class="form-group">
        <!--Text field-->
        <label for="firstName" class="col-md-2 control-label">First Name</label>
        <div class="col-md-4">
          <input v-model="controller.firstName"
                 v-validate data-vv-rules="required"
                 type="text"
                 class="form-control"
                 name="firstName"
                 placeholder="First Name"
                 focus="2"/>
          <span class="text-danger" v-if="errors.has('firstName')"><br/>
            <span>{{errors.first('firstName')}}</span>
          </span>
        </div>
      </div>

      <div class="form-group">
        <!--Text field-->
        <label for="lastName" class="col-md-2 control-label">Last Name</label>
        <div class="col-md-4">
          <input v-model="controller.lastName"
                 v-validate data-vv-rules="required"
                 type="text"
                 class="form-control"
                 name="lastName"
                 placeholder="Last Name"
                 focus="3"/>
          <span class="text-danger" v-if="errors.has('lastName')"><br/>
            <span>{{errors.first('lastName')}}</span>
          </span>
        </div>
      </div>

      <div class="form-group">
        <!--Text field-->
        <label for="newPassword" class="col-md-2 control-label">New Password</label>
        <div class="col-md-4">
          <input v-model="controller.newPassword"
                 v-validate data-vv-rules="required"
                 type="password"
                 class="form-control"
                 name="newPassword"
                 placeholder="New Password"
                 focus="4"/>
          <span class="text-danger" v-if="errors.has('newPassword')"><br/>
            <span>{{errors.first('newPassword')}}</span>
          </span>
        </div>
      </div>
      <div class="form-group">
        <!--Text field-->
        <label for="confirmPassword" class="col-md-2 control-label">Confirm Password</label>
        <div class="col-md-4">
          <input v-model="controller.confirmPassword"
                 v-validate data-vv-rules="required"
                 type="password"
                 class="form-control"
                 name="confirmPassword"
                 placeholder="Confirm Password"
                 focus="5"/>
          <span class="text-danger" v-if="errors.has('confirmPassword')"><br/>
            <span>{{errors.first('confirmPassword')}}</span>
          </span>
        </div>
      </div>
      <button @click="register()" class="btn btn-primary btn-lg"
              :disabled="!controller.email
              || !controller.firstName
              || !controller.lastName
              || !controller.newPassword
              || !controller.confirmPassword
              || errors.any()">Register
      </button>
    </form>
    <!--<span style="color:red" v-if="controller.isError('')"><br/><span>{{controller.error}}</span></span>-->
  </div>
</template>

<script lang="ts">
  import * as Vue from 'vue';
  import Component from 'vue-class-component';
  import {Inject} from 'vue-property-decorator';
  import {Controller} from '../../js/controller';
  import {amorphicService} from '../common/constants';
  import {AmorphicService} from '../common/amorphic.service';

  // The @Component decorator indicates the class is a Vue component
  @Component({
    name: 'registration'
  })
  export default class Login extends Vue {
    // Initial data can be declared as instance properties
    controller: Controller;
    @Inject(amorphicService) amorphicService: AmorphicService;
//        controller: Controller = window.controller
    // Component methods can be declared as instance methods
    created() {
      this.controller = this.amorphicService.controller;
    }

    register(): void {
      this.controller.publicRegister('http://localhost', '', 'registration_instructions')
          .then(function (result) {
            //this.router.navigate(['/tickets']);
            console.log('Register **********');
            this.$router.push('/');
          })
          .catch(function (e) {
            return console.log('Register *****EEEEEEE*******');
          });
      this.$parent.$emit('registration');
    }
  }
</script>