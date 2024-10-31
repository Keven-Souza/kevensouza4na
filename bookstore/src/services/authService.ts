// src/services/authService.ts

import { UserRepository } from '../repositories/userRepository'; // Importe o repositório de usuários
import bcrypt from 'bcrypt'; // Certifique-se de que bcrypt está instalado
import { User } from '../models/userModel';

export class AuthService {
  private userRepository = new UserRepository();

  async registerUser(name: string, email: string, password: string): Promise<User> {
    // Aqui você pode adicionar a lógica para o registro, como validações e hashing da senha
    const passwordHash = await bcrypt.hash(password, 10);
    return this.userRepository.addUser(name, email, passwordHash);
  }

  async loginUser(email: string, password: string): Promise<User | null> {
    const user = await this.userRepository.getUserByEmail(email);

    if (user && await bcrypt.compare(password, user.passwordHash)) {
      return user; // Retorna o usuário se as credenciais estiverem corretas
    }

    return null; // Retorna null se o usuário não existir ou a senha estiver incorreta
  }
}

