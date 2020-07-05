import { SelectProps as AntSelectProps, SelectValue } from 'antd/lib/select';
import { OptionProps as AntOptionProps } from 'rc-select/lib/Option';

export type SelectData = {
  value?: SelectValue;
  text: string;
};

export type CustomOptionProps = {
  value?: SelectValue;
};

export type OptionProps = Omit<AntOptionProps, 'value' | 'children'> & CustomOptionProps;

export type CustomProps = {
  data: SelectData[];
};

export type SelectProps = Omit<AntSelectProps<SelectValue>, 'value'>;

export type Props = SelectProps & CustomProps;

// import { SelectProps } from 'antd/lib/select';
// interface AttributeProps extends SelectProps {

// }
// type CustomProps = {
//   // data: 
// };

// export type Props = AttributeProps & CustomProps;
// // ButtonHTMLAttributes<HTMLButtonElement>;
// // Select.propTypes = {
// //   data: arrayOf(
// //     shape({
// //       value: string,
// //       text: string.isRequried,
// //     }),
// //   ),
// // };