# Ecosystem Flow

> Overview of the business ecosystem and how platform products fit together.

## Understanding the Business Ecosystem

Before diving into products like *EZChat*, *EZWallet*, *EZUrls*, *EZFlow*, *Patient360* and other platform services, it is important to understand the business ecosystem and the problem these systems are trying to solve. <br>  
<!-- --- -->


## Pharmaceutical companies, Drugs, and Enrollment Programs

The platform serves **pharmaceutical companies** that manufacture and market prescription drugs. In the real world, each company may run one or more **patient enrollment programs** (EEPs) tied to a specific drug—programs that help patients access *support*, *education*, *savings*, *or related services around that therapy*.<br>  


In this codebase, those business concepts map as follows:


| Business concept       | Meaning                                                     | Codebase term           |
| ---------------------- | ----------------------------------------------------------- | ----------------------- |
| Pharmaceutical company | Manufacturer / sponsor of a drug                            | **Org** (Noven)         |
| Drug / therapy         | The product the company markets (e.g. a branded medication) | **Campaign** (Xelstrym) |


An **org** owns one or more **campaigns**. Each campaign is scoped to a drug’s enrollment program—not a generic marketing “campaign” in the ad-tech sense, but the operational program the platform runs for that therapy.<br>

### Example: Noven and Xelstrym

**Noven** is a pharmaceutical manufacturer (**org**). **Xelstrym** is one of their drugs. Noven runs an enrollment program for patients on Xelstrym—that program is represented in the platform as a **campaign** under the Noven org.

```
Noven (org)
  └── Xelstrym enrollment program (campaign)
        └── Platform flows (sessions, enrollments, wallet passes, etc.)
```

When you see routes or data keyed by `orgCode` and `campaignCode`, read them as **which manufacturer** and **which drug’s enrollment program**—for example, Noven + Xelstrym.<br>
<!-- --- -->


## Why pharmaceutical companies create EEP programs

Enrollment programs exist because branded therapies are expensive, competitive, and long-term. Manufacturers invest in EEPs to support patients through the journey—not only at first fill, but across adherence and refills. Common drivers:<br>

### 1. Help patients afford expensive brand-name drugs

Many branded medications are costly for patients, especially in the U.S. healthcare system where out-of-pocket share can be high. EEPs often include financial support such as:

- **Copay assistance programs** — reduce what the patient pays at the pharmacy
- **Savings cards** — discounts or caps on out-of-pocket cost for eligible patients<br>

### 2. Increase adoption of newer medications

When a new drug launches, the manufacturer needs both sides of the market to engage:

- **Prescribers** — doctors aware of the therapy and willing to prescribe it
- **Patients** — people who start the medication and **stay on therapy** (persistence and adherence)

EEPs support onboarding, education, and ongoing touchpoints so new products gain traction and patients do not drop off early.<br>

### 3. Build brand loyalty

Beyond price, EEPs deepen the relationship between the patient and the brand:

- **Better patient support** — access to program resources, nurses, hubs, or digital tools
- **Refill reminders** — nudges and outreach so patients do not miss doses or abandon therapy<br>

Together, affordability, launch adoption, and loyalty explain why each drug’s **campaign** in the platform is more than a signup form—it is the operational wrapper for the manufacturer’s patient program.<br>
<!-- --- -->


## How the platform helps pharmaceutical companies

1. Pharmaceutical manufacturers invest heavily in EEPs, but poor enrollment experiences often reduce program effectiveness. <br> 

2. Legacy systems rely on fragmented communication flows such as long SMS threads and out-of-order messaging.<br>  

3. Patients frequently drop off before completing:
  - Opt-in
  - Copay / savings activation
   This impacts affordability, adoption, and brand loyalty goals.<br>  

4. Our products together form a **Patient & HCP Engagement Platform** that provides tailored workflows per **org** and **campaign** instead of a generic one-size-fits-all enrollment flow.<br>
<!-- --- -->


### What manufacturers get


| Outcome                    | How the platform supports it                                                                    |
| -------------------------- | ----------------------------------------------------------------------------------------------- |
| **Higher completion**      | Shorter, clearer paths from first touch (e.g. keyword SMS) through enrollment and program tools |
| **Lasting relationships**  | Ongoing engagement—reminders, wallet passes, tailored content—not a one-time form               |
| **Better program results** | Fewer exits mid-journey; more patients who enroll, activate savings, and stay on therapy        |
| **Visibility end to end**  | **Insights at every step**—what patients and HCPs do, where they stall, and what to improve     |
<!-- --- -->


### Traditional-Text Based  vs EZPlatform-Based Enrollment Journey

