---
layout: post
author: Alejandro
title: "🧰 Mini Tutorial de GitLab"
date: 2025-03-19
pin: true
math: false
mermaid: false
---


GitLab es una plataforma completa de DevOps que facilita el control de versiones, integración continua y colaboración en equipo. Esta guía te llevará paso a paso por las funciones esenciales.

---

## 📂 1. Crear un Repositorio

```bash
# Desde la interfaz web:
1. Inicia sesión en [GitLab](https://gitlab.com/)
2. Haz clic en "New Project"
3. Elige "Create Blank Project"
4. Completa los detalles y haz clic en "Create project"
```

💻 2. Clonar un Repositorio
```bash
# Copia el repositorio a tu máquina local:
git clone https://gitlab.com/usuario/repositorio.git
cd repositorio
```

🔄 3. Flujo Básico de Trabajo
```bash
# Hacer cambios y subirlos:
git add .                          # Añade todos los cambios
git commit -m "Descripción clara"  # Guarda los cambios localmente
git push origin main               # Sube los cambios al servidor
```

🌿 4. Manejo de Ramas
```bash
# Crear y trabajar con ramas:
git checkout -b nueva-funcionalidad  # Crea y cambia a nueva rama
git push -u origin nueva-funcionalidad  # Publica la rama

# Fusionar cambios:
git checkout main
git merge nueva-funcionalidad
```

🛠️ 5. Merge Requests (Solicitudes de Fusión)

    En GitLab, ve a "Merge Requests" > "New Merge Request"

    Selecciona rama origen y destino

    Revisa los cambios y asigna revisores

    Haz clic en "Submit merge request"

🔍 6. Comandos Útiles Adicionales
```bash
# Ver estado actual:
git status

# Ver historial de commits:
git log --oneline --graph

# Sincronizar con cambios remotos:
git pull origin main
```

¿Encontraste útil este tutorial? ¡Déjanos tus comentarios! 💬