import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    try {
      const userCreated = await this.usersService.create(createUserDto);
      return res.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        statusMsg: 'CREATED',
        data: [userCreated],
      });
    } catch (err) {
      const { message, status, response } = err;
      return res.status(status || HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: status || HttpStatus.INTERNAL_SERVER_ERROR,
        error: response.error || HttpStatus.INTERNAL_SERVER_ERROR,
        message: message,
      });
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const userList = await this.usersService.findAll();
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        statusMsg: 'OK',
        data: userList,
      });
    } catch (err) {
      const { message, status, response } = err;
      return res.status(status || HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: status || HttpStatus.INTERNAL_SERVER_ERROR,
        error: response.error || HttpStatus.INTERNAL_SERVER_ERROR,
        message: message,
      });
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const userFinded = await this.usersService.findOne(+id);
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        statusMsg: 'OK',
        data: [userFinded],
      });
    } catch (err) {
      const { message, status, response } = err;
      return res.status(status || HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: status || HttpStatus.INTERNAL_SERVER_ERROR,
        error: response.error || HttpStatus.INTERNAL_SERVER_ERROR,
        message: message,
      });
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res() res: Response,
  ) {
    try {
      const userUpdated = await this.usersService.update(+id, updateUserDto);
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        statusMsg: 'OK',
        data: [userUpdated],
      });
    } catch (err) {
      const { message, status, response } = err;
      return res.status(status || HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: status || HttpStatus.INTERNAL_SERVER_ERROR,
        error: response.error || HttpStatus.INTERNAL_SERVER_ERROR,
        message: message,
      });
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try {
      await this.usersService.remove(+id);
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        statusMsg: 'OK',
      });
    } catch (err) {
      const { message, status, response } = err;
      return res.status(status || HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: status || HttpStatus.INTERNAL_SERVER_ERROR,
        error: response.error || HttpStatus.INTERNAL_SERVER_ERROR,
        message: message,
      });
    }
  }
}
