import { Box, Flex, Text, Link, Button } from '@radix-ui/themes';
import NikLPkgMgrLogo from '/nikl-pkg.svg'
import { csrfToken } from '../state/Auth';
import { useAtomValue, useSetAtom } from 'jotai';


type NavButtonProps = {
  name: string;
  href: string;
};

export function NavBar() {
  const user = useAtomValue(csrfToken);
  const setCsrfToken = useSetAtom(csrfToken);

  const DisplayNavButton = ({ name, href }: NavButtonProps) => (
    <Link href={href} underline="none" weight="medium" color="gray">
      {name}
    </Link>
  );

  return (
    <Box
      as="div"
      width="100%"
      px="4"
      py="3"
      mb="3"
      style={{
        backgroundColor: '#f9fafb',
        borderBottom: '1px solid #e5e7eb',
      }}>
      <Flex justify="between" align="center">
        {/* Logo and Title */}
        <Flex align="center" gap="2" onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }}>
          <img src={NikLPkgMgrLogo} alt="Nik-Lang Package Manager Logo" style={{ height: '24px', width: '24px' }} />
          <Text as="span" weight="bold" size="4" color="gray">
            Nik-Lang Package Manager
          </Text>
        </Flex>

        <Flex gap="4" align="center">
          <DisplayNavButton name="Home" href="/" />
          <DisplayNavButton name="Search" href="/search" />
          {user ? (
            <>
              <DisplayNavButton name="Dashboard" href="/manage/dashboard" />
              <DisplayNavButton name="Packages" href="/manage/packages" />
              <DisplayNavButton name="Profile" href="/manage/profile" />
              <DisplayNavButton name="Settings" href="/manage/settings" />
              <Button
                color="red"
                onClick={() => {
                  setCsrfToken('');
                  window.location.href = '/';
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <DisplayNavButton name="Login" href="/login" />
              <DisplayNavButton name="Register" href="/register" />
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
