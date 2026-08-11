import { useState } from "react";
import { sendMessage } from "../services/contactServices";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Full name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email address is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: null }));
        }
        if (status) {
            setStatus(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            setLoading(true);
            setStatus(null);

            await sendMessage(formData);

            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} noValidate className="contact-form">
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                    <span id="name-error" className="field-error" role="alert">
                        {errors.name}
                    </span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                    <span id="email-error" className="field-error" role="alert">
                        {errors.email}
                    </span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="How can I help?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    aria-invalid={errors.subject ? "true" : "false"}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                    <span id="subject-error" className="field-error" role="alert">
                        {errors.subject}
                    </span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project, opportunity, or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                    <span id="message-error" className="field-error" role="alert">
                        {errors.message}
                    </span>
                )}
            </div>

            {status === "success" && (
                <div className="form-status success" role="status">
                    Message sent successfully. Thanks for reaching out — I'll get back to you soon.
                </div>
            )}

            {status === "error" && (
                <div className="form-status error" role="alert">
                    Sorry, your message could not be sent right now. Please try again or email me directly at
                    <a href="mailto:oluwaseyifunmioluwadami@gmail.com">oluwaseyifunmioluwadami@gmail.com</a>
                </div>
            )}

            <button
                type="submit"
                disabled={loading}
                className="submit-btn"
            >
                {loading ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}