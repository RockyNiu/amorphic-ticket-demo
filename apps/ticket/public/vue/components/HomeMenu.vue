<template>
  <div>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <ul class="nav navbar-nav" v-if="!controller.loggedIn">
        <li>
          <router-link to="">Home</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
        <li>
          <router-link to="/registration">Registration</router-link>
        </li>
      </ul>
      <ul class="nav navbar-nav" v-if="controller.loggedIn">
        <li>
          <router-link to="">Home</router-link>
        </li>
        <li>
          <router-link to="/tickets">Tickets</router-link>
        </li>
        <li>
          <router-link to="/projects">Projects</router-link>
        </li>
        <!--<li>-->
        <!--<router-link to="/people">People</router-link>-->
        <!--</li>-->
        <li class="dropdown">
          <a href="#" class="dropdown-toggle"
             data-toggle="dropdown">Hello <span>{{controller.loggedInPerson.firstName}}</span><b class="caret"></b>
          </a>
          <ul class="dropdown-menu">
            <li><a @click="logout()">Logout</a></li>
            <!--<li>-->
            <!--<router-link to="/change_email">Change email</router-link>-->
            <!--</li>-->
            <!--<li>-->
            <!--<router-link to="/change_password">Change Password</router-link>-->
            <!--</li>-->
            <li v-show="controller.isAdmin()"><a @click="deleteAll()">Clear Database</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <div class="container">
      <p style="text-align: right;height: 14px;padding-top: 50px">
        <span style="align:center">{{controller.status}}</span>
        <span style="color: red;align:center">{{controller.error}}</span>
      </p>
      <!--jquery<p id="welcome-message">Hello</p>-->
      <!--method<p>{{methodsRandom()}}</p>-->
      <!--computed<p>{{computedRandom}}</p>-->
    </div>
    <!--<div class="container" id="container" style="margin-top: 50px">-->
    <!-- component matched by the route will render here -->
    <!--</div>-->
  </div>
</template>

<script lang="ts">
  import * as Vue from 'vue';
  import {Component, Inject, Model, Prop, Watch} from 'vue-property-decorator'
  import {Controller} from '../../js/controller';
  import {amorphicService} from '../common/constants';
  import {AmorphicService} from '../common/amorphic.service';
  import $ = require('jquery');

  // The @Component decorator indicates the class is a Vue component
  @Component({
    methods: {
      methodsRandom: function () {
        return Date.now();
      }
    }
  })
  export default class HomeMenu extends Vue {
    // Initial data can be declared as instance properties
    controller: Controller;
//    test: number = 1;
    @Inject(amorphicService) amorphicService: AmorphicService;
    // Component methods can be declared as instance methods
    created() {
      this.controller = this.amorphicService.controller;
    }

    logout(): void {
      this.controller.publicLogout();
      this.controller.password = '';
      this.$router.push('/');
    }

//    get computedRandom(): number {
//      this.test += 1;
//      return Date.now();
//    }
//
//    @Watch('test')
//    onTestChanged (val: number) {
//      let p = $('#welcome-message');
//      console.log(p.text());
//      p.text(val + ' ' + Date.now());
//    }

  }
</script>
