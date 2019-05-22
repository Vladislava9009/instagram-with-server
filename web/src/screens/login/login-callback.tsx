import React, { useEffect } from 'react';

import { InstagramService } from '../../services/instagram-service';

export function LoginCallback() {
  useEffect(() => {
    InstagramService.loginCallback();
  });

  return <div />;
}
