import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Index = () => (
  <div className="Index">
    <Jumbotron className="text-center">
      <h2>Genby</h2>
      <p> Una plataforma amigable para ti.</p>
      <p><a className="btn btn-success" href="https://steamcommunity.com/openid/login?openid.ns=http://specs.openid.net/auth/2.0&openid.mode=checkid_setup&openid.return_to=http://localhost:3000/_oauth/steam?state=eyJsb2dpblN0eWxlIjoicG9wdXAiLCJjcmVkZW50aWFsVG9rZW4iOiJ0S2ZwMm51Nk5xNEUxYTlqdll1Q0dReWN2UURLXzdLTUVyTjJKcjRzWDhQIiwiaXNDb3Jkb3ZhIjpmYWxzZX0%3D&openid.realm=http://localhost:3000/&openid.ns.sreg=http://openid.net/extensions/sreg/1.1&openid.identity=http://specs.openid.net/auth/2.0/identifier_select&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select&state=eyJsb2dpblN0eWxlIjoicG9wdXAiLCJjcmVkZW50aWFsVG9rZW4iOiJ0S2ZwMm51Nk5xNEUxYTlqdll1Q0dReWN2UURLXzdLTUVyTjJKcjRzWDhQIiwiaXNDb3Jkb3ZhIjpmYWxzZX0=" role="button">Ir a  Steam desde Genbby</a></p>
      <p style={ { fontSize: '16px', color: '#aaa' } }> Version Beta 1.0.0</p>
    </Jumbotron>
  </div>
);

export default Index;
