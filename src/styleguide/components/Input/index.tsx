import * as React from 'react';
import styled from 'styled-components/native';
import { uiColorToBaseColor } from '@styleguide/styles/color';

import { TextInput, TextInputProps } from 'react-native';

const Container = styled.View`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const Label = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: ${uiColorToBaseColor('black')};
  margin-bottom: 5px;
`;

const TextInputWrapper = styled.View<{ isFocused: boolean; isInvalid: boolean }>`
  background-color: ${(props) =>
    uiColorToBaseColor(props.isInvalid ? 'lighterRed' : 'lighterPurple')};
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      uiColorToBaseColor(
        // eslint-disable-next-line no-nested-ternary
        props.isFocused ? (props.isInvalid ? 'red' : 'darkPurple') : 'transparent'
      )};
`;
const StyledTextInput = styled.TextInput`
  font-size: 15px;
  color: ${uiColorToBaseColor('black')};
  padding: 10px 15px;
`;

interface Props extends TextInputProps {
  label?: string;
  isInvalid?: boolean;
}

export const Input = (props: Props) => {
  const { label, isInvalid, onFocus, onBlur, ...otherProps } = props;
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <TextInputWrapper isFocused={isFocused} isInvalid={isInvalid || false}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <StyledTextInput
          {...otherProps}
          selectionColor={uiColorToBaseColor('darkPurple')}
          onFocus={(e) => {
            setIsFocused(true);
            if (onFocus) {
              onFocus(e);
            }
          }}
          onBlur={(e) => {
            setIsFocused(false);
            if (onBlur) {
              onBlur(e);
            }
          }}
        />
      </TextInputWrapper>
    </Container>
  );
};
