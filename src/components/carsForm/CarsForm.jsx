import brands from "../../helpers/makes.json";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { setFilter, setPriceFilter } from "../../redux/sliceFilter";
import { selectedMileageFrom, selectedMileageTo } from "../../redux/selectors";
import { Controller, useForm } from "react-hook-form";

import { StyledContainer } from "../../helpers/Container.styled";
import {
  StyledButtonContainer,
  StyledForm,
  StyledFormDiv,
  StyledInput,
  StyledInput2Div,
  StyledInputDiv,
  StyledLabel,
  StyledSearchButton,
} from "./CarsForm.styled";

const customStyles = {
  singleValue: (provided) => ({
    ...provided,
    color: "#171612",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "20px",
  }),
  control: (provided) => ({
    ...provided,
    padding: "14px 16px 14px 18px ",
    boxShadow: "none",
    border: "none",
    borderRadius: "14px",
    backgroundColor: "#F7F7FB",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "var(--Text)",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "20px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "var(---White)",
    color: state.isFocused ? "#000000" : "rgba(18, 20, 23, 0.20)",
  }),
};

const CarsForm = () => {
  const dispatch = useDispatch();
  const { control, register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    dispatch(setFilter(data.brand.value));
    dispatch(setPriceFilter(data.price?.value));
    dispatch(selectedMileageFrom(data.from.replace(/\D/g, "")));
    dispatch(selectedMileageTo(data.to.replace(/\D/g, "")));
    reset();
  };
  const makePriceOptions = () => {
    const optionsArray = [];
    for (let i = 10; i < 210; i += 10) {
      optionsArray.push({ value: i, label: `${i} $` });
    }
    return optionsArray;
  };
  const optionsPrice = makePriceOptions();
  const brandOptions = brands.map((brand, index) => ({
    value: index,
    label: brand,
  }));

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormDiv>
          <StyledLabel htmlFor="carBrand">Car brand</StyledLabel>
          <Controller
            name="brand"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                options={brandOptions}
                placeholder="Enter the text"
                styles={customStyles}
              />
            )}
          />
        </StyledFormDiv>
        <StyledFormDiv>
          <StyledLabel htmlFor="pricePerHour">Price/ 1 hour</StyledLabel>
          <Controller
            name="price"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                options={optionsPrice}
                placeholder="To $"
                styles={customStyles}
              />
            )}
          />
        </StyledFormDiv>
        <StyledFormDiv>
          <StyledLabel>Car mileage / km</StyledLabel>
          <StyledInputDiv>
            <StyledInput
              {...register("from", {
                onChange: (e) => {
                  e.target.value = e.target.value
                    .replace(/\D/g, "")
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                },
              })}
              placeholder="From"
              type="text"
              maxLength={8}
            />
            <StyledInput
              {...register("to", {
                onChange: (e) => {
                  e.target.value = e.target.value
                    .replace(/\D/g, "")
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                },
              })}
              placeholder="To"
              type="text"
              maxLength={8}
            />
          </StyledInputDiv>
        </StyledFormDiv>

        <StyledButtonContainer>
          <StyledSearchButton type="submit">Search</StyledSearchButton>
        </StyledButtonContainer>
      </StyledForm>
    </StyledContainer>
  );
};

export default CarsForm;
