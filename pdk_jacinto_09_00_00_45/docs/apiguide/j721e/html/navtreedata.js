/*
@ @licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2017 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "PDK API Guide for J721E", "index.html", [
    [ "PDK API Guide", "index.html", null ],
    [ "Enet Integration Guide", "enet_integration_guide_top.html", [
      [ "Getting Familiar with Enet LLD APIs", "enet_integration_guide_top.html#GettingFamiliarWithAPIs", [
        [ "IOCTL Interface", "enet_integration_guide_top.html#IOCTL_description", null ]
      ] ],
      [ "Integrating Enet LLD into User's Application", "enet_integration_guide_top.html#enet_integration_in_app", [
        [ "Init Sequence", "enet_integration_guide_top.html#enet_init_sequence", null ],
        [ "Peripheral Open Sequence", "enet_integration_guide_top.html#enet_open_sequence", null ],
        [ "Port Open Sequence", "enet_integration_guide_top.html#enet_openport_sequence", null ],
        [ "Packet Send/Receive Sequence", "enet_integration_guide_top.html#enet_pktrxtx_sequence", null ],
        [ "Packet Timestamping Sequence", "enet_integration_guide_top.html#enet_pktts_sequence", null ],
        [ "IOCTL Sequence", "enet_integration_guide_top.html#enet_ioctl_sequence", null ],
        [ "Port Close Sequence", "enet_integration_guide_top.html#enet_closeport_sequence", null ],
        [ "Peripheral Close Sequence", "enet_integration_guide_top.html#enet_close_sequence", null ],
        [ "Deinit Sequence", "enet_integration_guide_top.html#enet_deinit_sequence", null ],
        [ "Peripheral-specific", "enet_integration_guide_top.html#enetper_specific_handling", [
          [ "ICSSG Dual-MAC", "enet_integration_guide_top.html#enetper_icssg_dmac_specific_handling", [
            [ "Firmware", "enet_integration_guide_top.html#enetper_icssg_dmac_fw_specific_handling", null ],
            [ "Firmware Memory Pools", "enet_integration_guide_top.html#enetper_icssg_dmac_fwmem_specific_handling", null ]
          ] ],
          [ "ICSSG Switch", "enet_integration_guide_top.html#enetper_icssg_swt_specific_handling", [
            [ "Firmware", "enet_integration_guide_top.html#enetper_icssg_swt_fw_specific_handling", null ],
            [ "Firmware Memory Pools", "enet_integration_guide_top.html#enetper_icssg_swt_fwmem_specific_handling", null ]
          ] ]
        ] ]
      ] ],
      [ "Migrating from EMAC LLD", "enet_integration_guide_top.html#emac_lld_migration", [
        [ "ICSSG Migration", "enet_integration_guide_top.html#emac_lld_migration_icssg", [
          [ "Peripheral open", "enet_integration_guide_top.html#emac_lld_migration_icssg_per_open", null ],
          [ "IOCTLs", "enet_integration_guide_top.html#emac_lld_migration_icssg_ioctl", [
            [ "Asynchronous IOCTLs", "enet_integration_guide_top.html#emac_lld_migration_icssg_async_ioctl", null ],
            [ "IOCTL Command Mappings", "enet_integration_guide_top.html#emac_lld_migration_icssg_ioctl_mappings", null ]
          ] ],
          [ "Packet send and receive", "enet_integration_guide_top.html#emac_lld_migration_icssg_dma", null ]
        ] ]
      ] ]
    ] ],
    [ "Enet LLD IOCTL interface", "enet_ioctl_interface.html", [
      [ "Introduction", "enet_ioctl_interface.html#enet_ioctl_intro", [
        [ "Using the IOCTL interface", "enet_ioctl_interface.html#using_enet_ioctl", null ],
        [ "Synchronous and Asynchronous IOCTLs", "enet_ioctl_interface.html#enet_async_ioctl", null ]
      ] ]
    ] ],
    [ "Enet LLD Introduction", "enetlld_top.html", [
      [ "Introduction", "enetlld_top.html#enetlld_intro", null ],
      [ "Application Programming Interface", "enetlld_top.html#enetlld_api_overview", null ],
      [ "Enet Peripherals", "enetlld_top.html#enetlld_enetpers", [
        [ "CPSW Peripheral", "enetlld_top.html#enetper_cpsw", [
          [ "CPSW as a replacement to External Switch", "enetlld_top.html#cpsw_external_switch_replacement", null ]
        ] ],
        [ "ICSSG Peripheral", "enetlld_top.html#enetper_icssg", [
          [ "ICSSG Dual-MAC", "enetlld_top.html#enetper_icssg_dualmac", null ],
          [ "ICSSG Switch Mode", "enetlld_top.html#enetper_icssg_switch", null ]
        ] ]
      ] ],
      [ "Integration", "enetlld_top.html#enetlld_integration", null ],
      [ "Document Revision History", "enetlld_top.html#enetlld_hist", null ]
    ] ],
    [ "Ethernet PHY Integration Guide", "enetphy_guide_top.html", [
      [ "Introduction", "enetphy_guide_top.html#enetphy_guide_intro", null ],
      [ "PHY Driver", "enetphy_guide_top.html#enetphy_guide_driver", [
        [ "Device-Specific Drivers", "enetphy_guide_top.html#enetphy_guide_device_specific", null ],
        [ "PHY to Driver Binding", "enetphy_guide_top.html#enetphy_guide_binding", null ]
      ] ],
      [ "Implementing a New PHY Driver", "enetphy_guide_top.html#enetphy_guide_implementing", null ],
      [ "Appendix", "enetphy_guide_top.html#enetphy_guide_appendix", [
        [ "Appendix A", "enetphy_guide_top.html#enetphy_guide_appendix_a", null ]
      ] ]
    ] ],
    [ "Ethernet PHY Link Configuration", "enetphy_link_config_top.html", [
      [ "Link Configuration Guidelines", "enetphy_link_config_top.html#enetphy_link_config_guidelines", [
        [ "Manual Mode", "enetphy_link_config_top.html#enetphy_link_manual", [
          [ "Half-Duplex Mode", "enetphy_link_config_top.html#enetphy_link_manual_half_duplex", null ],
          [ "Full-Duplex Mode", "enetphy_link_config_top.html#enetphy_link_manual_full_duplex", null ]
        ] ],
        [ "Auto-Negotiation Mode", "enetphy_link_config_top.html#enetphy_link_autoneg", null ],
        [ "Strapping", "enetphy_link_config_top.html#enetphy_link_strapping", null ]
      ] ]
    ] ],
    [ "Modules", "modules.html", "modules" ]
  ] ]
];

var NAVTREEINDEX =
[
"enet_integration_guide_top.html",
"group__BOARD__LIB__DEVICES__FPD__DS90UB924__TYPES.html#ga1b846948e5f2e1b5315a2ca379c2407b",
"group__BOARD__LIB__DEVICES__FPD__DS90UB941__APIS.html#ga570a924ef2340cf0aa72f48398a576f3",
"group__BOARD__LIB__DEVICES__FPD__DS90UB941__TYPES.html#gafd42c0008f4a02756b813801831f71fb",
"group__BOARD__LIB__DEVICES__POWER__TPS65941__TYPES.html#ga5499b5d6e22aed76a39ef87632362e89",
"group__BOARD__LIB__DEVICES__POWER__TPS65941__TYPES.html#gac86cb58ab2419c766fa623a79cc6d8b0",
"group__BOARD__LIB__MODULE__TYPES.html#ga50aed068b7e7e58a313c10015ca7b45a",
"group__CPSW__CPTS__MOD.html#ggab788726fe114cfc32a32011edfa724ffa008a23508061d211a57e47003d839d8e",
"group__CSL__ADC__TOP__LEVEL.html#gaffc78e7533a659ad080d7996052226f1",
"group__CSL__CPSWITCH__FUNCTION.html#ga0c4941fedc5bdddf43bc204a58bb1916",
"group__CSL__CPSW__SS__S__FUNCTION.html#ga2ef8d4555e367be85ab51b90193208ce",
"group__CSL__DSSOVERLAY.html#ga97d71d9f152602cd81c45e7cdfa3a92d",
"group__CSL__EMIF__FUNCTION.html#gacd103c6d78ed7b80286a6e93b967a49e",
"group__CSL__HW__MCSPI.html#ga1b256f8c57b7aa67104870f1bcab6c8c",
"group__CSL__HW__MCSPI.html#ga5a0443cfe5b30283d0255fba21201126",
"group__CSL__HW__MCSPI.html#ga98c28c90466cc126a75cca7ad5dbb643",
"group__CSL__HW__MCSPI.html#gacf8b3a4e728c6c2cd68d3847d36f7ebc",
"group__CSL__HW__RTI.html#ga260706a3129eec3261237d4715decae1",
"group__CSL__HW__UART.html#ga12e385e9f3b7a0d0d1f436ddd2fcc65b",
"group__CSL__HW__UART.html#ga54d3ee359d797ce6a270878067a2509f",
"group__CSL__HW__UART.html#ga9e45d8b3e3f5d46e5d3c23e21421a102",
"group__CSL__HW__UART.html#gae8851484e6e84bf6796eed79ce7a2142",
"group__CSL__MCAN.html#gaeeb968306e5214fe7b5e7359ecfd24f7",
"group__CSL__OSPI__ENUM.html#gaa8f8a216a155ec1237f04c14d8ce6686",
"group__CSL__PSILCFG__ENUM.html#gad4004c77898030c6052e92438168a213",
"group__CSL__UART__TOP__LEVEL.html#ga236f2c7cf13e04d7831e4589f9100e79",
"group__CSL__UDMAP__CPPI5__DATASTRUCT.html",
"group__CSL__UDMAP__FUNCTION.html#gaf396fa9133180b0399cd6f837168802e",
"group__CSL__UDMAP__TR.html#gad4bc473d9c5717cad17a03c6e7f7c670",
"group__CsitxDriverFunctionAPI.html#gad8b21432ebe10c60a4f9ce8c3100d511",
"group__DRV__DSS__DCTRL__IOCTL.html#gae55f1184bc13a50a4e113e95835a5d0c",
"group__DRV__ENET__ICSSG.html#ga28bd3bf6f2794c12894154ff75a7c2ee",
"group__DRV__I2C__API__MODULE.html#ggac954e3197f04c50293db466c4abb6fbeae619ec9344c1dda3c922121a0844053c",
"group__DRV__OSAL__API.html#ga378288b3e2376c73c0eded6e154985ac",
"group__DRV__OSAL__Queue.html#ga792e3ce982e3508f74d4cc6a5daeb76e",
"group__DRV__OSPI__MODULE.html#ga0f7bf9f87a746c7819512fe16ee9c7b5",
"group__DRV__PMIC__ESM__MODULE.html#ga84daa3e050de934d2682607e1f6a430f",
"group__DRV__PMIC__IRQ__MODULE.html#ga399393cb781b8951b1b27190e437c211",
"group__DRV__PMIC__POWER__MODULE.html#ga4deb9e1d845bbacf8adc3d6fcd90a94e",
"group__DRV__PMIC__POWER__MODULE.html#gafc26cf730695e45d830a3b01b46ae40c",
"group__DRV__SPI__API__MODULE.html#ga70e081e0aa8208fc6e57e9e9383050ad",
"group__DRV__UDMA__CFG__MODULE.html#gaf4ba1552cb157a7ba232fb61611d69d3",
"group__DRV__UDMA__RING__MODULE.html#gafc96bde137c46acaee3db15db90d2fcf",
"group__ENET__MAIN__API.html#gac2f30f7b3277c9ffa89018d226fa8985",
"group__ENET__MOD__TIMESYNC.html#ggab00c3816cf482c3a350dd4be9f752386a4a0fd9c00fe7601acb360cd8188dacb4",
"group__HW__ADC.html#ga130dcd767a50cd07a23e0ea37fcca19e",
"group__HW__ADC.html#ga6b1d387dc2f4fa4abe520cf96551862a",
"group__HW__ADC.html#gac46fc59bb0420a50e5e4e5ec2fcecc61",
"group__HW__WD__TIMER.html#ga53d0437fb02b79f15a92c2a920e626ac",
"group__SCICLIENT__FMW__RM__IF.html#ga22170acf13b97130bd0abb17abf117b4",
"group__SCISERVER__SEC__PROXY__REGS.html#gadc0227a262cb0aa0f0b478c2fe098a98",
"group__llist.html#gae191c382c170bf9c3e872aa0d2264a1c",
"group__tisci__ext__otp.html",
"group__tisci__protocol.html#gae92df9913d4e4222168a99ff51aba3b1",
"group__unibase__macros.html#ga7b9bee7da2fa2ae8eaa7bd3b2e5b8d83",
"structCSIRX__SoftReset__s.html#ab864c7e850b19264377d0a8c6aaa3238",
"structCSL__CPSW__ALE__UNICASTADDR__ENTRY.html#acd122b3aab1d87389c7eaab32de9d9ec",
"structCSL__CPSW__TSCNTL.html#acdb4cd273d6d2ef3c585a74b38a17f3f",
"structCSL__DssVpLcdBlankTimingCfg.html#ad79981ec3f4a8df8ee12b1dd96e7c667",
"structCSL__RingAccRingCfg.html#a0b3088223519719ba850350a43d2abf8",
"structCSL__UdmapTR8__t.html#a1a2dbeb2ccbc254e5388c98a6d155957",
"structCpswAle__PolicerEntryOutArgs.html#a4515ec75f3208a8ff39b3b74ba091e89",
"structCpswMacPort__IpTsCfg.html#ac5ee4686cdb444503fcc77c6a0580042",
"structCpswStats__MacPort__Ng.html#ad57d0e0bab2c17e86d99d6cb542011d8",
"structCsitxDrv__CommonObj.html#a9f5d180783e15d35720c223f50874c90",
"structDss__DispBufPrgmCbParams.html",
"structEnetRm__AllocMacAddrOutArgs.html",
"structEnetUdma__UdmaRingPrms.html#a5f6462a71e8289c03de418e0047457ee",
"structIcssg__DfltVlanCfg.html#a13048931e37635046c0e155b4266c1f3",
"structMCAN__InitParams.html#aee4c56f9333bbb46904dcf1d02a261d9",
"structMcasp__PktAddrPayload.html#acda252324d83c7b3238d57918cd18111",
"structPmic__GpioCfg__t.html",
"structSciclient__rmIrqIf.html#a9e9f7e0bbc7fb8782b0ec6767cfe7784",
"structUdma__ChUtcPrms.html#ab33399f5cffb69343dd4586a8adb1056",
"struct____attribute____.html#a110229668eba3f2d886acf3cc9ce464f",
"structtisci__boardcfg__dbg__cfg.html",
"structtisci__msg__get__otp__row__lock__status__req.html",
"structtisci__msg__rm__udmap__flow__cfg__req.html",
"structtisci__msg__write__otp__row__resp.html#af2ab3c2b154906e53db694ba4e91fe81"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';