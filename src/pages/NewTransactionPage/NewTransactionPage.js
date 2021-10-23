import * as S from "./style"

const NewTransactionPage = () => {
  return (
    <S.PageContainer>
      <S.Header>Nova Entrada</S.Header>
      <S.Form>
        <S.Input placeholder="Valor"></S.Input>
        <S.Input placeholder="Descrição"></S.Input>
        <S.Button>Salvar entrada</S.Button>
      </S.Form>
    </S.PageContainer>
  );
}

export default NewTransactionPage;