import { IsNotEmpty } from "class-validator";

export class CreateMemberBody {

  @IsNotEmpty()
  name: string;


  @IsNotEmpty({
    message: 'This is a customized message from CreateMemberBody'
  })
  function: string
}
