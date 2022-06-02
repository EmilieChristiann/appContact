<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 3</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      <ExploreContainer name="Tab 3 page" />
      <ion-card>
        <ion-card-header>
          <ion-card-title>Mes favoris</ion-card-title>
        </ion-card-header>
      </ion-card>
      <ion-card>
        <div v-for="(contact, index) in contacts" :key="index">
          Nom: {{ contact.name }} {{contact.firstname}}  
          <ion-button @click="deleteFav(index)">Supprimer des favoris</ion-button>
        </div>
      </ion-card> 
      <div v-if="contacts.length === 0">
        <p style="color: red;">Vous n'avez pas de favoris pour le moment</p>
      </div> 
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { Contact } from '../domains/contact.interface';
import contactQuery from "@/query/contact.query";
import contactCommand from "@/commands/contact.command";
import favsCommand from '@/commands/favs.command';
import favQuery from '@/query/favs.query';


export default defineComponent({
  name: 'Tab3Page',
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
    this.addFavs();
  },
    methods: {
      addFavs() {
        this.contacts= favQuery.addFavs();
      },

      deleteFav(index: number) {
        const contact: Contact = this.contactForm;
        return favsCommand.deleteFav(index);
      }
    }
});
</script>
