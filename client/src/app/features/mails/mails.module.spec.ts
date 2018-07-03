import { MailsModule } from './mails.module';

describe('MailsModule', () => {
  let mailsModule: MailsModule;

  beforeEach(() => {
    mailsModule = new MailsModule();
  });

  it('should create an instance', () => {
    expect(mailsModule).toBeTruthy();
  });
});
