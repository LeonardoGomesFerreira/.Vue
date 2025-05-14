<template>
    <div class="container bg-white rounded-2xl shadow-2xl p-10">
        <div class="flex justify-between items-center mb-8">
            <h2
                class="text-4xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Clientes
            </h2>
            <button @click="showModal = true"
                class="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 transform hover:scale-105">
                Adicionar Cliente
            </button>
        </div>
        <transition-group name="list" tag="ul" class="space-y-6">
            <li v-for="(cliente, index) in clientes" :key="index"
                class="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex justify-between items-center transform hover:-translate-y-1">
                <span class="text-lg font-medium text-gray-800">{{ cliente }}</span>
                <button @click="removerCliente(index)"
                    class="text-red-600 hover:text-red-800 font-semibold transition-colors duration-300">
                    Remover
                </button>
            </li>
        </transition-group>
        <transition name="modal">
            <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                <div class="bg-white rounded-2xl p-8 w-full max-w-lg shadow-2xl transform transition-all">
                    <h3 class="text-2xl font-semibold text-gray-900 mb-6">Adicionar Cliente</h3>
                    <input v-model="novoCliente" type="text" placeholder="Nome do cliente"
                        class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-6 transition-all duration-300" />
                    <div class="flex justify-end space-x-4">
                        <button @click="showModal = false"
                            class="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-300">
                            Cancelar
                        </button>
                        <button @click="adicionarCliente"
                            class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                            Adicionar
                        </button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Clientes',
    data() {
        return {
            clientes: JSON.parse(localStorage.getItem('clientes')) || [],
            showModal: false,
            novoCliente: ''
        }
    },
    methods: {
        adicionarCliente() {
            if (this.novoCliente.trim()) {
                this.clientes.push(this.novoCliente.trim())
                localStorage.setItem('clientes', JSON.stringify(this.clientes))
                this.novoCliente = ''
                this.showModal = false
            }
        },
        removerCliente(index) {
            this.clientes.splice(index, 1)
            localStorage.setItem('clientes', JSON.stringify(this.clientes))
        }
    }
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
    transition: all 0.6s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.list-move {
    transition: transform 0.6s ease;
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.4s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
    transition: transform 0.4s ease;
}

.modal-enter-from .bg-white,
.modal-leave-to .bg-white {
    transform: scale(0.95);
}
</style>