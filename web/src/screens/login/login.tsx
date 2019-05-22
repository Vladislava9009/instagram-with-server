import React, { useEffect } from 'react';

import { InstagramService } from '../../services/instagram-service';

export function Login() {
  useEffect(() => {
    InstagramService.login();
  });

  return <div />;
}
