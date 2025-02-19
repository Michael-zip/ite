import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const EnhancedStudyGuide = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-8">Enhanced IT Essentials Study Guide</h1>

      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>1. Core Concepts & Safety</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">ESD Protection & Component Safety</h3>
              <div className="pl-4">
                <p className="mb-3">Electrostatic Discharge (ESD) represents a critical risk to computer components, with different voltage thresholds:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>30 Volts: Minimum threshold for component damage. Most dangerous because it's undetectable but can cause latent damage that appears later.</li>
                  <li>3,000 Volts: Common damage level during routine handling. Can instantly destroy sensitive components.</li>
                  <li>10,000+ Volts: Human-detectable static shock level. While most noticeable, damage has already occurred at lower levels.</li>
                </ul>

                <h4 className="font-semibold mt-4">Core Components:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>CPU (Central Processing Unit):
                    <p className="mt-1">The processor requires specific installation procedures:
                      - Proper alignment with socket (matching arrows)
                      - Clean surface for thermal paste application
                      - Correct mounting pressure for heat sink
                      - Adequate cooling solution rated for TDP</p>
                  </li>
                  <li>RAM (Random Access Memory):
                    <p className="mt-1">Temporary storage with specific considerations:
                      - Voltage requirements (DDR4: 1.2V, DDR3: 1.5V)
                      - No backward compatibility between generations
                      - Proper seating in slots (clicks both sides)
                      - Matching pairs for dual-channel operation</p>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-4">Power Systems</h3>
              <div className="pl-4">
                <p className="mb-3">Power conversion is crucial for computer operation:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>AC/DC Conversion:
                    <p className="mt-1">Power Supply Unit (PSU) converts household AC (110-240V) to multiple DC voltages:
                      - 3.3V & 5V: Digital circuits, USB, SATA devices
                      - 12V: Motors, fans, high-power components
                      - Efficiency ratings (80 Plus Bronze to Titanium)</p>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-4">Case Types & Considerations</h3>
              <div className="pl-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full Tower:
                    <p className="mt-1">- Supports E-ATX motherboards
                      - Maximum expansion capability
                      - Better airflow and cooling options
                      - Ideal for workstations and servers</p>
                  </li>
                  <li>Small Form Factor (SFF):
                    <p className="mt-1">- Limited expansion but space-efficient
                      - Requires careful component selection
                      - Often uses SFX power supplies
                      - Popular for office and home theater use</p>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>9. Memory Standards and Power Connections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">RAM Standards and Specifications</h3>
              <div className="pl-4">
                <p className="mb-3">Different RAM generations have specific characteristics:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>DDR Specifications:
                    <p className="mt-1">- DDR2: 240-pin, 1.8V operating voltage
                      - DDR3: 240-pin, 1.5V operating voltage
                      - DDR4: 288-pin, 1.2V operating voltage
                      - DDRSRAM: 184-pin (older standard)
                      Key differences: Pin count prevents incorrect installation</p>
                  </li>
                  <li>Compatibility Considerations:
                    <p className="mt-1">Two critical factors for RAM replacement:
                      - Motherboard compatibility (physical slot type)
                      - Chipset support (generation and speed)
                      - No backward compatibility between generations</p>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-4">Power Connections and Standards</h3>
              <div className="pl-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Motherboard Power:
                    <p className="mt-1">- 24-pin main connector (keyed for correct orientation)
                      - 4-8 pin auxiliary CPU power
                      - Both required for proper operation</p>
                  </li>
                  <li>Component Power:
                    <p className="mt-1">- Molex: 4-pin legacy connector for HDDs/optical drives
                      - SATA: 15-pin power connector for modern drives
                      - PCIe 6/8-pin: High-performance GPU power
                      Each connector is keyed to prevent incorrect insertion</p>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-4">Hot-Swapping and Interfaces</h3>
              <div className="pl-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hot-Swapping Explained:
                    <p className="mt-1">- Ability to remove/insert components while system is running
                      - Supported by SATA devices
                      - Requires OS support
                      - Not all ports support this feature</p>
                  </li>
                  <li>Interface Evolution:
                    <p className="mt-1">- IDE: 40-pin legacy interface (obsolete)
                      - SATA: Modern serial interface
                      - PCIe: Serial bus for expansion cards
                      Data transfer: One bit at a time over serial bus</p>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>10. Advanced Hardware Concepts and Safety</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">CPU Socket Types and Installation</h3>
              <div className="pl-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Socket Types:
                    <p className="mt-1">- PGA (Pin Grid Array): Pins on CPU
                      - LGA (Land Grid Array): Pins in socket
                      Each requires different installation technique</p>
                  </li>
                  <li>Installation Considerations:
                    <p className="mt-1">Three critical factors:
                      1. Anti-static protection (prevent damage)
                      2. Proper alignment (match arrows)
                      3. Correct heat sink mounting (proper pressure)</p>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-4">Workspace Safety Requirements</h3>
              <div className="pl-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Temperature Control:
                    <p className="mt-1">- Maintain 45-90°F (7-32°C)
                      - Prevents thermal stress on components
                      - Reduces condensation risk
                      - Ensures proper operation</p>
                  </li>
                  <li>Physical Safety:
                    <p className="mt-1">- Tape sharp case edges
                      - Use proper lifting techniques
                      - Ensure proper ventilation
                      - Keep workspace clean and organized</p>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-4">Chipset Architecture</h3>
              <div className="pl-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Northbridge:
                    <p className="mt-1">- Handles high-speed components
                      - Controls CPU, RAM, and PCIe
                      - Direct connection to CPU
                      - Critical for system performance</p>
                  </li>
                  <li>Southbridge:
                    <p className="mt-1">- Manages slower peripherals
                      - Controls SATA, USB, BIOS
                      - Connected through Northbridge
                      - Handles I/O operations</p>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Security Features & Asset Protection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">LoJack for Laptops</h3>
              <div className="pl-4">
                <p className="mb-3">Comprehensive theft protection system with multiple features:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Core Functionality:
                    <p className="mt-1">- Embedded in BIOS/UEFI firmware
                      - Survives OS reinstallation and drive formatting
                      - Silent tracking with GPS and Wi-Fi positioning
                      - Remote data deletion capabilities
                      - Coordination with law enforcement</p>
                  </li>
                  <li>Recovery Process:
                    <p className="mt-1">- Automatic location reporting when connected
                      - Remote lockdown options
                      - Forensic data to aid recovery
                      - Professional recovery team assistance</p>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. Advanced Architecture Concepts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">RISC vs CISC Architecture</h3>
              <div className="pl-4">
                <p className="mb-3">Fundamental differences in processor design philosophy:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>RISC (Reduced Instruction Set Computing):
                    <p className="mt-1">- Simpler instructions executed in one cycle
                      - Used in ARM processors (mobile devices)
                      - Better power efficiency
                      - Requires more RAM for complex operations
                      - Examples: Apple M1/M2, Qualcomm Snapdragon</p>
                  </li>
                  <li>CISC (Complex Instruction Set Computing):
                    <p className="mt-1">- Complex instructions that do more per cycle
                      - Used in x86 processors (desktop/laptop)
                      - Better backward compatibility
                      - Higher power consumption
                      - Examples: Intel Core, AMD Ryzen</p>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        
        <Card>
          <CardHeader>
            <CardTitle>4. Storage Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Modern Storage Solutions</h3>
              <div className="pl-4">
                <p className="mb-3">Different storage technologies serve various use cases:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Enterprise HDDs (3.5" 15k RPM):
                    <p className="mt-1">- Optimized for RAID configurations
                      - Higher reliability rating (MTBF)
                      - Enhanced error correction
                      - Designed for 24/7 operation
                      - Better vibration resistance</p>
                  </li>
                  <li>NVMe SSDs:
                    <p className="mt-1">- PCIe 4.0 speeds up to 7000+ MB/s
                      - Lower latency than SATA
                      - Direct CPU connection
                      - Better IOPS performance
                      - Ideal for OS and applications</p>
                  </li>
                </ul>

                <h4 className="font-semibold mt-4">RAID Configurations:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>RAID 0 (Striping):
                    <p className="mt-1">- Improved performance
                      - No redundancy
                      - Full capacity utilization
                      - Risk of total data loss</p>
                  </li>
                  <li>RAID 1 (Mirroring):
                    <p className="mt-1">- Complete redundancy
                      - Simple implementation
                      - 50% capacity efficiency
                      - Improved read performance</p>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Network Infrastructure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Network Types and Topologies</h3>
              <div className="pl-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal Area Network (PAN):
                    <p className="mt-1">- Range: Less than 10 meters
                      - Uses: Bluetooth devices, NFC
                      - Common in: Mobile devices, peripherals
                      - Low power consumption</p>
                  </li>
                  <li>Virtual LAN (VLAN):
                    <p className="mt-1">- Logical network segmentation
                      - Enhanced security
                      - Reduced broadcast traffic
                      - Flexible resource allocation
                      - IEEE 802.1Q standard</p>
                  </li>
                  <li>Wireless Mesh Network (WMN):
                    <p className="mt-1">- Self-healing capabilities
                      - Distributed access points
                      - Dynamic routing
                      - Scalable coverage
                      - Redundant paths</p>
                  </li>
                </ul>

                <h4 className="font-semibold mt-4">Connection Types:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fiber Optic:
                    <p className="mt-1">- Speeds up to 10+ Gbps
                      - Immune to interference
                      - Long-distance capability
                      - Types: Single-mode, Multi-mode</p>
                  </li>
                  <li>Cable Internet:
                    <p className="mt-1">- DOCSIS 3.1 standard
                      - Shared bandwidth
                      - Coaxial infrastructure
                      - Up to 1 Gbps typical</p>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. Professional Troubleshooting</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Cisco's Six-Step Process</h3>
              <div className="pl-4">
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Identify the Problem:
                    <p className="mt-1">- Gather user reports
                      - Document symptoms
                      - Check error messages
                      - Note recent changes
                      - Review system logs</p>
                  </li>
                  <li>Establish Theory:
                    <p className="mt-1">- Consider common causes
                      - Check physical connections
                      - Review similar cases
                      - List potential issues</p>
                  </li>
                  <li>Test Theory:
                    <p className="mt-1">- Start with simplest solution
                      - Test one component at a time
                      - Document results
                      - Confirm or eliminate causes</p>
                  </li>
                </ol>

                <h4 className="font-semibold mt-4">Diagnostic Tools:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Windows Event Viewer:
                    <p className="mt-1">- System logs
                      - Application errors
                      - Security events
                      - Custom logs</p>
                  </li>
                  <li>POST Diagnostics:
                    <p className="mt-1">- Beep code meanings
                      - Visual error codes
                      - Hardware initialization
                      - System checks</p>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. Maintenance and Security</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Preventive Maintenance</h3>
              <div className="pl-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Physical Maintenance:
                    <p className="mt-1">- Clean dust regularly
                      - Check fan operation
                      - Inspect connections
                      - Monitor temperatures
                      - Verify ventilation</p>
                  </li>
                  <li>Software Maintenance:
                    <p className="mt-1">- Update operating system
                      - Check disk health
                      - Monitor event logs
                      - Update drivers
                      - Scan for malware</p>
                  </li>
                </ul>

                <h4 className="font-semibold mt-4">Security Features:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>LoJack for Laptops:
                    <p className="mt-1">- BIOS-level protection
                      - Remote tracking
                      - Data wiping capability
                      - Law enforcement cooperation
                      - Theft recovery service</p>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>8. Advanced Hardware Concepts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Processor Architectures</h3>
              <div className="pl-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>RISC Architecture:
                    <p className="mt-1">- Simpler instruction set
                      - Lower power consumption
                      - Common in mobile devices
                      - Examples: ARM, RISC-V
                      - Better performance per watt</p>
                  </li>
                  <li>CISC Architecture:
                    <p className="mt-1">- Complex instructions
                      - x86 compatibility
                      - Higher performance
                      - Desktop/server focus
                      - Advanced features (virtualization)</p>
                  </li>
                </ul>

                <h4 className="font-semibold mt-4">High-Performance Components:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Graphics Processing:
                    <p className="mt-1">- Dual 8-pin power
                      - PCIe x16 interface
                      - Multi-GPU support
                      - Cooling requirements
                      - Power considerations</p>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </section>
    </div>
  );
};

export default EnhancedStudyGuide;