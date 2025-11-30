import React, { useState } from 'react';

import styled from 'styled-components/native';

type SearchTextFieldProps = {
  onSubmitSearchTerm: (query: string) => void;
};

const SearchTextField: React.FC<SearchTextFieldProps> = ({
  onSubmitSearchTerm,
}) => {
        const [searchTerm, setSearchTerm] = useState<string>('');

        const handleSearchQuery = () => {
                const query = searchTerm.trim();
                onSubmitSearchTerm(query);
        };

        return (
                <SearchBox>
                        <SearchInput
                        value={searchTerm}
                        onChangeText={setSearchTerm}
                        placeholder="Search shop ..."
                        returnKeyType="search"
                        onSubmitEditing={handleSearchQuery}
                        />
                </SearchBox>
        );
};

export default SearchTextField;

const SearchBox = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 14px;
  border-radius: 8px;
  background-color: #eeeeeeff;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #3C2E5A;
`;
