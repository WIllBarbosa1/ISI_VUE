<template>
  <main class="show-page">
    <div>
      <h2 class="title">Shows</h2>
      <button @click="handleNewShow">Adicionar Show</button>
    </div>
    <table class="table">
      <tr class="table-header">
        <td>Show</td>
        <td>Data</td>
        <td>Hora</td>
        <td>Ações</td>
      </tr>
      <tr class="table-row" v-for="item in shows" :key="item.id">
        <td>{{ item.nome_atracao }}</td>
        <td>{{ item.data }}</td>
        <td>{{ item.hora }}</td>
        <td>
          <button @click="handleEdit(item)">Editar</button>
          <button @click="handleDelete(item.id)">Excluir</button>
        </td>
      </tr>
    </table>
    <Loading v-if="loading" />
    <Modal v-if="isModal" @on-cancel="handleCancel" @on-save="handleSave">
      <div class="modal-container">
        <h2>Show</h2>
        <div class="inputs-container">
          <label for="bandName">Banda</label>
          <input id="bandName" type="text" v-model="showBand" />
          <label for="bandDate">Data</label>
          <input id="bandDate" type="date" v-model="showDate" />
          <label for="bandTime">Hora</label>
          <input id="bandTime" type="time" v-model="showTime" />
        </div>
      </div>
    </Modal>
  </main>
</template>

<script>
import Loading from '@/components/Loading/Loading.vue';
import Modal from '@/components/Modal/Modal.vue';
import {
  getShows, editShow, deleteShow, createShow,
} from '@/services/instance';

export default {
  name: 'Shows Page',
  data() {
    return {
      loading: false,
      shows: [],
      isModal: false,
      showBand: '',
      showDate: '',
      showTime: '',
      showId: '',
    };
  },
  components: {
    Loading,
    Modal,
  },
  methods: {
    handleEdit(item) {
      this.showBand = item.nome_atracao;
      this.showDate = item.data;
      this.showTime = item.hora;
      this.showId = item.id;
      this.isModal = true;
    },
    async handleDelete(id) {
      try {
        this.loading = true;
        await deleteShow(id);
      } catch (error) {
        alert(error.message);
      } finally {
        this.handleGetInfo();
        this.loading = false;
        this.showId = false;
      }
    },
    async handleSave() {
      try {
        this.loading = true;
        if (this.showId) {
          await editShow(this.showId, this.showBand, this.showDate, this.showTime);
        } else {
          await createShow(this.showBand, this.showDate, this.showTime);
        }
      } catch (error) {
        alert(error.message);
      } finally {
        this.handleGetInfo();
        this.isModal = false;
        this.loading = false;
      }
    },
    handleCancel() {
      this.isModal = false;
    },
    handleNewShow() {
      this.showBand = '';
      this.showDate = '';
      this.showTime = '';
      this.showId = false;
      this.isModal = true;
    },
    async handleGetInfo() {
      try {
        this.loading = true;
        const { data } = await getShows();
        if (data) {
          this.shows = data;
        }
      } catch (error) {
        alert(error.message);
      } finally {
        this.loading = false;
      }
    },
  },
  async created() {
    this.handleGetInfo();
  },
};
</script>

<style src="./style.css"></style>
