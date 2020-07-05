import React from 'react';
import { Props } from './Select.types';
import { Select as AntdSelect } from 'antd';

// TODO option은 타입에 맞게 다시 정리할 필요가 있습니다. 시간이 부족해 여기까지는 못했어요 ㅠㅠ 보시고 궁금한점 있으며 물어봐주세요!!
const Option: React.FC<OptionProps> = () => AntdSelect.Option;

const Select: React.FC<Props> = ({ data, ...rest }) => (
  <AntdSelect {...rest}>
    {data.length &&
      data.map((option) => (
        <Option key={String(option.value)} value={option.value}>
          {option.text}
        </Option>
      ))}
  </AntdSelect>
);

export default Select;


// const { Option } = AntdSelect;
// const Button: React.FC<Props> = ({ children, type = 'button', ...rest }) => (
//   <button {...rest} type={type}>
//     {children}
//   </button>
// );
// const Select: React.FC = ({ data, ...rest }) => (
//   <AntdSelect {...rest}>
//     {data.length &&
//       data.map((option) => (
//         <Option key={option.value} value={option.value}>
//           {option.text}
//         </Option>
//       ))}
//   </AntdSelect>
// );

// export default Select;