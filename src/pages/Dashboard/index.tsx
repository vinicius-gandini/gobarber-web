import React from 'react';

import { FiClock, FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointments,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>dia</span>
            <span>tlatlal</span>
          </p>

          <NextAppointments>
            <strong>Atendimento a seguir</strong>
            <div>
              <img src="" alt="" />

              <strong>VInicius</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointments>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
