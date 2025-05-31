import { Box, Tabs, Text } from "@radix-ui/themes";
import React from "react";
import { NavBar } from "../components/NavBar";
import { useParams } from "react-router-dom";

export const PublicPackageDetails: React.FC = () => {
  // Get the Package ID and Version from the URL path /package/:id/:version
  const { id: packageId, version: packageVersion } = useParams<{
    id: string;
    version: string;
  }>();

  return (
    <>
      <NavBar />
      <Box style={{ maxWidth: 900, margin: "0 auto" }}>
        <Box style={{ padding: "20px" }}>
          <Text as="div" size="6" weight="bold" style={{ marginBottom: 4 }}>
            {packageId}
          </Text>
          <Text as="p" size="3" color="gray">
            Version: {packageVersion} | Downloads: ... | License: ...
          </Text>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Box style={{ flex: 1, padding: "20px" }}>
            <Tabs.Root defaultValue="readme">
              <Tabs.List>
                <Tabs.Trigger value="readme">Readme</Tabs.Trigger>
                <Tabs.Trigger value="versions">Versions</Tabs.Trigger>
                <Tabs.Trigger value="dependencies">Dependencies</Tabs.Trigger>
              </Tabs.List>
              <Box pt="3">
                <Tabs.Content value="readme">
                  <Text size="2">Readme content goes here</Text>
                </Tabs.Content>
                <Tabs.Content value="versions">
                  <Text size="2">List of versions for this package</Text>
                </Tabs.Content>
                <Tabs.Content value="dependencies">
                  <Text size="2">
                    Dependencies for this package will be listed here
                  </Text>
                </Tabs.Content>
              </Box>
            </Tabs.Root>
          </Box>
          <Box
            style={{
              width: 280,
              padding: "20px",
              borderLeft: "1px solid #e5e7eb",
            }}
          >
            <Text as="div" size="4" weight="bold" style={{ marginBottom: 8 }}>
              Metadata Details
            </Text>
            <Text as="p" size="2" color="gray" style={{ marginBottom: 8 }}>
              Details about the package will be displayed here.
            </Text>
            <Text as="p" size="2" style={{ marginBottom: 4 }}>
              {packageId}
            </Text>
            <Text as="p" size="2" style={{ marginBottom: 12 }}>
              {packageVersion}
            </Text>
            <Text
              as="h3"
              size="3"
              weight="bold"
              style={{ marginTop: 16, marginBottom: 4 }}
            >
              Install
            </Text>
            <Text as="p" size="2" style={{ marginBottom: 8 }}>
              Run the following nikl command in your project directory:
            </Text>
            <Box
              style={{
                background: "#f5f5f7",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
                padding: "12px",
                marginTop: "8px",
                fontFamily: "monospace",
                fontSize: "14px",
                overflowX: "auto",
              }}
            >
              <code>
                nikl install {packageId}@{packageVersion}
              </code>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PublicPackageDetails;
