import { BtnBlock } from "components/Common.styled";
import { useAppSelector } from "features/typedRedux";
import { useState } from "react";
import { FormGroup, FormWrapper, Input, Label, Select, Textarea } from "./Form.styled";

interface ITicketFormData {
  name: string;
  email: string;
  product: string;
  description: string;
}

interface ITicketForm {
  formHandler: (data: ITicketFormData) => void;
}

const TicketForm = ({ formHandler }: ITicketForm) => {
  const { user } = useAppSelector((state) => state.auth);
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    formHandler({ name, email, product, description });
  };

  return (
    <FormWrapper>
      <FormGroup>
        <Label htmlFor="name">Customer Name</Label>
        <Input type="text" value={name} disabled />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Customer Email</Label>
        <Input type="text" value={email} disabled />
      </FormGroup>
      <form onSubmit={onSubmit}>
        <FormGroup>
          <Label htmlFor="product">Product</Label>
          <Select name="product" id="product" value={product} onChange={(e) => setProduct(e.target.value)}>
            <option value="iPhone">iPhone</option>
            <option value="Macbook Pro">Macbook Pro</option>
            <option value="iMac">iMac</option>
            <option value="iPad">iPad</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description of the issue</Label>
          <Textarea
            name="description"
            id="description"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Textarea>
        </FormGroup>
        <FormGroup>
          <BtnBlock>Submit</BtnBlock>
        </FormGroup>
      </form>
    </FormWrapper>
  );
};

export default TicketForm;
