import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { LoginResponse, UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-profile-user',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.scss'
})
export class ProfileUserComponent {

   usuario: LoginResponse | null = null;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuario = this.usuarioService.getLoggedUser();
    console.log(this.usuario)
  }
  

}
