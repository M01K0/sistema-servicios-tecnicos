<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay lazy transition="dialog-bottom-transition">
    <v-btn slot="activator" color="info" small flat block>
      Equipos de {{ cliente }}
      <v-icon right>
        devices_other
      </v-icon>
    </v-btn>
    <v-card>
      <v-toolbar dark color="info">
        <v-btn icon dark @click="close">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Equipos de {{ cliente }} </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-container grid-list-xs>
        <v-layout v-if="!equiposCount">
          <v-flex xs12>
            <v-alert type="warning" :value="true">
              No hay equipos para mostrar
            </v-alert>
          </v-flex>
        </v-layout>
        <v-layout v-for="item in equipos" :key="item.equipo + item.modelo" row wrap>
          <v-flex>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h1 class="headline" v-text="item.equipo + ' ' + item.modelo"></h1>
                  <div>
                    <span class="title" v-text="item.estado"></span>
                  </div>
                </div>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-list two-line subheader>
                  <v-list-tile avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>Descripción del equipo</v-list-tile-title>
                      <v-list-tile-sub-title v-text="item.descripcion"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>Diagnóstico</v-list-tile-title>
                      <v-list-tile-sub-title v-text="item.diagnostico"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'EquiposCliente',
  props: {
    cliente: {
      type: String,
      default: 'Cliente'
    },
    equipos: {
      type: Array
    }
  },
  data: () => ({
    dialog: false,
    showTicket: false
  }),
  computed: {
    equiposCount() {
      return this.equipos.length
    }
  },
  methods: {
    close() {
      this.dialog = false
    }
  }
}
</script>

<style></style>
