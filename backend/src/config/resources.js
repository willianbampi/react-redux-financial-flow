const PORT = 3003

const MONGO_URL = 'mongodb://localhost/financialflow'

const REQUIRED_MESSAGE_GENERAL = "O atributo '{PATH}' é obrigatório."
const REQUIRED_MESSAGE_GENERAL_NUMBER_MIN = "O atributo '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
const REQUIRED_MESSAGE_GENERAL_NUMBER_MAX = "O atributo '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
const REQUIRED_MESSAGE_GENERAL_STRING_ENUM = "O atributo '{VALUE}' não é válido para o atributo '{PATH}'"

const OPTIONS = 'OPTIONS'
const NO_TOKEN_PROVIDED = 'No token provided.'
const FAILED_AUTH_TOKEN = 'Failed to authenticate token.'

const REQUIRED_BILLING_CYCLE_CREDIT_NAME = 'Informe o valor do atributo name (nome) para o crédito!'
const REQUIRED_BILLING_CYCLE_CREDIT_VALUE = 'Informe o valor do atributo value (valor) para o crédito!'
const REQUIRED_BILLING_CYCLE_DEBT_NAME = 'Informe o valor do atributo name (nome) para o débito!'
const REQUIRED_BILLING_CYCLE_DEBT_VALUE = 'Informe o valor do atributo value (valor) para o débito!'
const REQUIRED_BILLING_CYCLE_NAME = 'Informe o valor do atributo name (nome) para o ciclo financeiro!'
const REQUIRED_BILLING_CYCLE_MONTH = 'Informe o valor do atributo month (mês) para o ciclo financeiro!'
const REQUIRED_BILLING_CYCLE_YEAR = 'Informe o valor do atributo year (ano) para o ciclo financeiro!'

const REQUIRED_USER_NAME = 'Informe o valor do atributo name (nome) para o usuário!'
const REQUIRED_USER_EMAIL = 'Informe o valor do atributo emaail (email) para o usuário!'
const REQUIRED_USER_PASSWORD = 'Informe o valor do atributo password (senha) para o usuário!'

const TIME_EXPIRED_TOKEN = '1 day'

const INVALID_USER = 'O usuário já está cadastrado!'
const INVALID_USER_OR_PASSWORD = 'Usuário/Senha inválidos!'
const INVALID_EMAIL = 'O e-mail informado está inválido!'
const INVALID_PASSWORD_PATTERN = 'A senha precisar ter: uma letra maiúscula, uma letra minúscula, um número, uma caractere especial(@#$%) e tamanho entre 6-20.'
const INVALID_PASSWORDS = 'As senhas informadas não conferem!'

module.exports = {
    PORT,
    MONGO_URL,
    REQUIRED_MESSAGE_GENERAL,
    REQUIRED_MESSAGE_GENERAL_NUMBER_MIN,
    REQUIRED_MESSAGE_GENERAL_NUMBER_MAX,
    REQUIRED_MESSAGE_GENERAL_STRING_ENUM,
    OPTIONS,
    NO_TOKEN_PROVIDED,
    FAILED_AUTH_TOKEN,
    REQUIRED_BILLING_CYCLE_CREDIT_NAME,
    REQUIRED_BILLING_CYCLE_CREDIT_VALUE,
    REQUIRED_BILLING_CYCLE_DEBT_NAME,
    REQUIRED_BILLING_CYCLE_DEBT_VALUE,
    REQUIRED_BILLING_CYCLE_NAME,
    REQUIRED_BILLING_CYCLE_MONTH,
    REQUIRED_BILLING_CYCLE_YEAR,
    REQUIRED_USER_NAME,
    REQUIRED_USER_EMAIL,
    REQUIRED_USER_PASSWORD,
    TIME_EXPIRED_TOKEN,
    INVALID_USER,
    INVALID_USER_OR_PASSWORD,
    INVALID_EMAIL,
    INVALID_PASSWORD_PATTERN,
    INVALID_PASSWORDS,
}