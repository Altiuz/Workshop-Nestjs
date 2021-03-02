import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const user: User = await this.userRepository.findOne(id);
    if (!user) throw new NotFoundException(`user ID: ${id} doesn't exist`);
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = await this.userRepository.findOne(id);
    if (!user) throw new NotFoundException(`user ID: ${id} doesn't exist`);
    const { firstName, lastName, isActive } = updateUserDto;
    user.firstName = firstName;
    user.lastName = lastName;
    user.isActive = isActive;
    return await this.userRepository.save(user);
  }

  async remove(id: number) {
    const user: User = await this.userRepository.findOne(id);
    if (!user) throw new NotFoundException(`user ID: ${id} doesn't exist`);
    return await this.userRepository.delete(id);
  }
}
