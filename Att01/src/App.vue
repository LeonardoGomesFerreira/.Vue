<template>
  <div id="app" class="min-h-screen bg-gray-950 font-sans antialiased relative overflow-hidden">
    <div
      class="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-cyan-950 opacity-90 animate-gradient bg-[url('https://images.unsplash.com/photo-1612198188060-c33c44b1b714?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
    </div>
    <div class="absolute inset-0 particle-bg"></div>
    <div class="absolute inset-0 backdrop-blur-[2px] bg-black/30"></div>
    <header
      class="relative bg-gradient-to-r from-indigo-900/70 to-cyan-900/70 shadow-2xl backdrop-blur-xl border-b border-cyan-500/20 animate-float">
      <nav class="container mx-auto px-12 py-10">
        <ul class="flex justify-center space-x-20">
          <li>
            <router-link to="/"
              class="text-cyan-100 text-2xl font-bold hover:text-cyan-300 transition-all duration-400 ease-in-out relative group transform hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.8)]"
              active-class="text-cyan-200 font-bold border-b-4 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]">
              Home
              <span
                class="absolute left-0 bottom-0 w-full h-1.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center ripple-effect"></span>
            </router-link>
          </li>
          <li>
            <router-link to="/clientes"
              class="text-cyan-100 text-2xl font-bold hover:text-cyan-300 transition-all duration-400 ease-in-out relative group transform hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.8)]"
              active-class="text-cyan-200 font-extrabold border-b-4 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]">
              Clientes
              <span
                class="absolute left-0 bottom-0 w-full h-1.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center ripple-effect"></span>
            </router-link>
          </li>
          <li>
            <router-link to="/produtos"
              class="text-cyan-100 text-2xl font-bold hover:text-cyan-300 transition-all duration-400 ease-in-out relative group transform hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.8)]"
              active-class="text-cyan-200 font-extrabold border-b-4 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]">
              Produtos
              <span
                class="absolute left-0 bottom-0 w-full h-1.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center ripple-effect"></span>
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <transition name="holographic" mode="out-in">
      <router-view class="container mx-auto px-12 py-20 max-w-7xl relative z-10" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
:root {
  --neon-cyan: rgba(34, 211, 238, 0.8);
  --neon-shadow: 0 0 20px rgba(34, 211, 238, 0.6);
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background-size: 300% 300%;
  animation: gradient 12s ease infinite;
}

.particle-bg {
  background: radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.2) 2%, transparent 10%),
    radial-gradient(circle at 70% 70%, rgba(147, 51, 234, 0.2) 2%, transparent 10%);
  animation: particles 20s linear infinite;
}

@keyframes particles {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-10px);
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-4px);
  }
}

.animate-float {
  animation: float 5s ease-in-out infinite;
}

.ripple-effect::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: var(--neon-cyan);
  opacity: 0;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
}

.group:hover .ripple-effect::after {
  width: 100px;
  height: 100px;
  opacity: 0.3;
}

.holographic-enter-active,
.holographic-leave-active {
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.holographic-enter-from,
.holographic-leave-to {
  opacity: 0;
  transform: translateY(40px) scale(0.9) rotateX(10deg);
  filter: blur(2px);
}

body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: scanline 3s linear infinite;
}

@keyframes scanline {
  0% {
    transform: translateY(-100vh);
  }

  100% {
    transform: translateY(100vh);
  }
}
</style>