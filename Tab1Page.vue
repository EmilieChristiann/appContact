<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ajouter un contact</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="medium">Créer un contact</ion-title>
        </ion-toolbar>
      </ion-header>
      <ExploreContainer name="Tab 1 page" />
      <form action="" method="get" class="form-example">
        <ion-card>
          <ion-item>
            <ion-input type="file" name="photo" id="photo"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Name</ion-label>
            <ion-input type="text" v-model="contactForm.name" name="name" id="name"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Firstname</ion-label>
            <ion-input type="text" v-model="contactForm.firstname" name="fistname" id="firstname"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Company</ion-label>
            <ion-input type="text" v-model="contactForm.company" name="company" id="company"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Phone number</ion-label>
            <ion-input type="number" v-model="contactForm.phone" name="phone" id="phone"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Address</ion-label>
            <ion-input type="text" v-model="contactForm.address" name="address" id="address"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Email</ion-label>
            <ion-input type="email" v-model="contactForm.email" name="email" id="email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Note</ion-label>
            <ion-input type="text" v-model="contactForm.note" name="note" id="note"></ion-input>
          </ion-item>
        </ion-card>
      <ion-button expand="full" color="primary" shape="round" v-on:click="createContact()">Ajouter</ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, setTransitionHooks } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import contactCommand from '@/commands/contact.command';
import { Contact } from '../domains/contact.interface';
import contactQuery from '@/query/contact.query';

export default  defineComponent({
  name: 'Tab1Page',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput }, 
  data() {
    return {
      contactForm: {
        name: "",
        firstname: "",
        address: "",
        company: "",
        phone: null,
        email: "",
        note: "",
      } as Contact,
      contacts: [] as Array<Contact>
    }
  },

  methods: {
   createContact() {
     const contact: Contact = this.contactForm;
     return contactCommand.createContact(contact);
   },
  }
});
</script>