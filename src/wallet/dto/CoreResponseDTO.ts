import { ApiProperty } from '@nestjs/swagger';

export class CoreResponseDTO {
  @ApiProperty({ description: 'Response status' })
  status: string;
  @ApiProperty({ description: 'Response message' })
  message: string;
}
