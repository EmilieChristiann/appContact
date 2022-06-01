<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Liste</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Liste</ion-title>
        </ion-toolbar>
      </ion-header>
      <ExploreContainer name="Tab 2 page" />
      <ion-card>
        <ion-card-header>
          <ion-card-title>Ma liste des contacts</ion-card-title>
        </ion-card-header>
        <div v-if="contacts.length > 0">
          <div v-for="(contact, index) in contacts" :key="index">
            Nom {{ contact.name }} {{contact.firstname}}
            <ion-button @click="deleteContact(index)">Supprimer</ion-button>
            <ion-button @click="addFavs(index)">Favori</ion-button>
            <ion-button expand="block" color="primary" shape="round">Plus d'info</ion-button>
          </div>
        </div>
        <div v-if="contacts.length === 0">
          <p style="color: red;">Vous n'avez pas de contact pour le moment</p>
        </div>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { Contact } from '../domains/contact.interface';
import contactQuery from '@/query/contact.query';
import contactCommand from '@/commands/contact.command';

export default defineComponent({
  name: 'Tab2Page',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
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
  mounted() {
      this.getContacts();
  },
    methods: {
      deleteContact(index: number) {
        contactCommand.deleteContact(index);
        this.getContacts();
      },

      getContacts() {
      this.contacts = contactQuery.getContacts();
    },
  }, 
});
</script>