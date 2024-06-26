import { flags } from '../../themes';
export interface ButtonProps {
    enabled: boolean;
    onPress: () => void;
}
export interface CountryPickerProps {
    onSelected: (country: Country) => void;
    onCountryPickerShow: () => void;
}
export declare type FlagType = keyof typeof flags;
export declare type Countries = {
    [key in FlagType]: Country;
};
export interface Country {
    name: string;
    iso2: FlagType;
    dialCode: string;
    priority: number;
    areaCodes?: [] | null;
}
export interface SearchCountryInputProps {
    onChangeText: (country: string) => void;
    onCancel: () => void;
}
