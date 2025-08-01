// src/components/common/SecurityPolicyContent.jsx
import React from 'react';

const SecurityPolicyContent = () => {
    return (
        <div className="prose prose-invert prose-p:text-teal-200 prose-headings:text-white prose-h2:border-b prose-h2:border-white/20 prose-h2:pb-2 prose-a:text-accent hover:prose-a:text-yellow-300">
            <p className="mb-6">At MySertifico, the security of our platform and your data is our highest priority. We employ a multi-layered security strategy to protect our infrastructure and your sensitive information from unauthorized access and cyber threats.</p>

            <h2><i className="ri-server-line mr-2"></i>Infrastructure Security</h2>
            <p className="mb-4">Our platform is hosted on secure, compliant cloud servers that undergo regular security assessments. We implement firewalls, intrusion detection systems, and continuous monitoring to protect against vulnerabilities and ensure high availability.</p>

            <h2><i className="ri-shield-keyhole-line mr-2"></i>Data Encryption</h2>
            <p className="mb-4">All data transmitted between your device and our servers is encrypted using industry-standard Transport Layer Security (TLS). Sensitive data stored in our database, including personal information and certificate records, is encrypted at rest to prevent unauthorized access.</p>

            <h2><i className="ri-shield-user-line mr-2"></i>Access Control</h2>
            <p className="mb-4">We enforce strict access control policies. User accounts within an organization are assigned specific roles (e.g., Super Admin, Issuer, Signatory) with granular permissions, ensuring that users can only access the information and functions necessary for their role.</p>

            <h2><i className="ri-shield-check-line mr-2"></i>Certificate Integrity</h2>
            <p className="mb-4">Every digital certificate issued through MySertifico is secured with a unique, verifiable QR code. This feature provides an instant and reliable method to confirm the authenticity of a certificate, protecting against forgery and fraud.</p>

            <h2><i className="ri-alarm-warning-line mr-2"></i>Incident Response</h2>
            <p className="mb-4">We have a dedicated incident response plan in place to address any potential security breaches. In the event of a security incident, we are committed to promptly notifying affected users and taking all necessary steps to mitigate the impact and resolve the issue.</p>

            <h2><i className="ri-question-line mr-2"></i>Questions</h2>
            <p>If you have any questions about our security practices, please contact us at: <a href="mailto:security@mysertifico.com">security@mysertifico.com</a>.</p>
        </div>
    );
};

export default SecurityPolicyContent;