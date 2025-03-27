// Componente per far seguire l'avatar all'utente
AFRAME.registerComponent('avatar-follower', {
    init: function() {
      // Ottieni riferimenti alle entità necessarie
      this.rig = document.querySelector('#rig');
      this.avatar = document.querySelector('#avatar');
      this.lastPosition = new THREE.Vector3();
      this.lastPosition.copy(this.rig.object3D.position);
    },
    
    tick: function() {
      if (this.rig && this.avatar) {
        // Calcola la direzione di movimento
        let direction = new THREE.Vector3();
        direction.subVectors(this.rig.object3D.position, this.lastPosition);
        
        // Se c'è stato un movimento significativo (teleport o altro)
        if (direction.length() > 0.01) {
          // Aggiorna la posizione dell'avatar mantenendo l'offset originale
          this.avatar.object3D.position.x = 0;
          this.avatar.object3D.position.z = 0;
          
          // Orienta l'avatar nella direzione del movimento se necessario
          if (direction.x !== 0 || direction.z !== 0) {
            let angle = Math.atan2(direction.x, direction.z);
            this.avatar.object3D.rotation.y = angle;
          }
        }
        
        // Memorizza la posizione corrente per il prossimo frame
        this.lastPosition.copy(this.rig.object3D.position);
      }
    }
  });