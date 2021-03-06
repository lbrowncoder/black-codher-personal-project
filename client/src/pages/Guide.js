import React from "react";
import Guide from "../imagesMain/guide.jpg";
import "../App.css";

const guide = () => {
 return (
  <div className='guide'>
   <h1 className='guideTitle'>Guide To Choosing The Right Childcare</h1>
   <img className='guidePic' src={Guide} alt='Guide' />
   <p className='quality'>
    Finding good quality childcare can be a difficult task for parents. There
    are lots of things to look out for and to remember to ask when you visit a
    childcare setting. How do you know if your child will be happy? Will they
    cater for your child's needs? Do they provide feedback about how your child
    is doing? What if my child doesn't like it?
   </p>
   <p className='quality'>
    There are many other factors to also consider such as location, type of
    care, ethos, activities and nutrition. Try and visit a number of nurseries
    to give yourself an idea of different kinds of nurseries and take your child
    along so you can see what they think and how the staff interact with your
    child.
   </p>
   <p className='leave'>
    Don’t leave it till the last minute to find childcare before you go back to
    work as some nurseries have waiting lists.
   </p>
   <p className='guideText'>
    Draw up a shortlist of childcare providers. Things to consider first:
    <ul>
     <li>
      Decide which childcare provider setting will work best for you.
     </li>
     <li>
      Do you want a childcare provider close to home or close to your place of work?
     </li>
     <li>
      Do you want a large or a small childcare provider for your child?
     </li>
     <li>
      Is the childcare provider open just in term-time or does it offer all year round
      provision?
     </li>
     <li>
      What does the OFSTED report say? Does the nursery meet your own standards
      as a provider?
     </li>
    </ul>
   </p>
   <p className='guidePoints'>
    Once you have considered the points above, have a look at the point below:
    <li>The hourly, daily, and/or weekly cost? </li>
    <li>
     Does the nursery have space available for your child at the time you are
     looking for?
    </li>
    <li>
     The hours that childcare providers can provide childcare?
    </li>
    <li>Are the parking arrangements convenient?</li>
   </p>
   <h2 className='guideHeader'>Read Reviews</h2>
   <p className='guideText'>
    The best way to find out what a nursery is really like is to ask the parents
    of children at the nursery. The easiest way to do this is to read reviews of
    the nurseries at eggshells.co.uk. Look on social media sites and online
    forums to see what people are saying about it.
   </p>
   <h2 className='ofstedText'>Ofsted</h2>
   <p className='guideText'>
    Every nursery is inspected by an education watchdog and there will be
    reports of these inspections online. In England, you can check the Ofsted
    website, Ofsted visits all registered childcare services and makes sure that
    standards are being met and that children are safe. You can check Ofsted's
    grade and report for the childcare providers you are considering at
    www.ofsted.gov.uk.
   </p>
   <h2 className='guideHeader'>Visit your shortlist</h2>
   <p className='guideText'>
    It's a good idea to visit several settings and ask questions in person about
    the childcare provided. It might help to take a friend and/or your child on
    the visits to help you decide.
   </p>
   <h3 className='h3Guide'>What to look for:</h3>
   <ul>
    <li>
     Trained and experienced staff, ready to learn and respond to your child's
     individual needs
    </li>
    <li>
     Busy, but relaxed, children who seem happy and purposeful
    </li>
    <li>
     Safe and clean premises - welcoming and friendly with outside play space
    </li>
    <li>
     Cultural sensitivity and responsiveness to children's home life
    </li>
    <li>
     A staff team and group of children who reflect local ethnic and cultural
     groups
    </li>
    <li>
     Fun activities planned each day - childminders, nurseries and out-of-school
     clubs all need to plan their days with children's interests and enthusiasms
     in mind
    </li>
    <li>
     Planned exercise and quiet times to relax are important
    </li>
    <li> A big welcome for you and your child</li>
   </ul>
   <h3 className='h3Guide'>What to ask:</h3>
   <ul>
    <li>
     What is the ratio of staff to children? How many children do you care for?
    </li>
    <li>
     What qualifications and/or experience do you have?
    </li>
    <li>
     What are the daily routines and how can you incorporate my child's and
     other children's routines?
    </li>
    <li>
     Do you operate a key worker scheme (whereby one member of staff has main
     responsibility for your child)?{" "}
    </li>
    <li>
     What are your policies on discipline and how do you manage children's
     behaviour?
    </li>
    <li>
     Do you provide meals, snacks, nappies, etc. or will I need to provide them?
    </li>
    <li>
     How many of the staff have a paediatric first aid qualification?
    </li>
    <li>
     What is the nursery’s policy on cuddling your child if he or she is upset
     as some nurseries have a non-cuddling policy.
    </li>
   </ul>
   <h3 className='h3Guide'>Facilities:</h3>
   <ul>
    <li>What learning resources do they have?</li>
    <li>Do they have computer equipment?</li>
    <li>
     Do they have webcams so you can monitor your child while they are at
     nursery?
    </li>
    <li>
     Is there a good outdoor area which children can access freely?
    </li>
    <li>
     Do they have toys which will challenge your child and enhance their
     learning?
    </li>
    <li>Do they have diverse books and toys?</li>
    <li>Do they have a role play area?</li>
   </ul>
   <h3 className='h3Guide'>Activities:</h3>
   <ul>
    <li>
     Is there a set routine which children follow daily at the nursery?
    </li>
    <li>
   
     What is the philosophy of the nursery? Does it have a Montessori
     or Curiosity approach?
    </li>
    <li>
     Does it run Forest School or Beach School sessions?
    </li>
    <li>
     Does the nursery put on extra activities such as yoga or mindfulness?
    </li>
    <li>
     Can children have a nap if they need to and is there a designated area for
     this?
    </li>
    <li>
     What is the nursery’s policy if your child is ill?
    </li>
   </ul>
   <h3 className='h3Guide'>Behaviour:</h3>
   <ul>
    <li>How does the nursery promote good behaviour?</li>
    <li>
     How does the nursery deal with challenging behaviour?
    </li>
    <li>What is their potty training policy?</li>
    <li>How do they deal with children biting?</li>
   </ul>
   <h3 className='h3Guide'>Safeguarding:</h3>
   <ul>
    <li>Is everything clean and safe? </li>
    <li>
     How secure is the nursery and what system do they use for signing in and
     out of the nursery?
    </li>
    <li> Do the children look happy and settled? </li>
    <li>
     Are they free to choose what to do and what to play with?{" "}
    </li>
    <li>
     What extra safeguarding steps does the nursery take when the children are
     on a trip?
    </li>
   </ul>
   <h3 className='h3Guide'>Food:</h3>
   <ul>
    <li>
     Do they offer cooked food or will you need to give your child a packed
     lunch?
    </li>
    <li>
     If they offer hot food, study the menus to see how the food is prepared and
     how often they change their menu.
    </li>
    <li>What is their food hygiene rating?</li>
    <li>How do they deal with fussy eating?</li>
    <li>
     Can they cater for your child if they have any allergies or dislikes?
    </li>
   </ul>
   <h3 className='h3Guide'>Fees:</h3>
   <ul>
    <li>
     Does the nursery offer free childcare for disadvantaged two-year-olds?
    </li>
    <li>
     Does the nursery offer free childcare for three and four-year-olds?
    </li>
    <li>
     Do you have to pay extra for nappies, formula milk and snacks?
    </li>
    <li>Are there any other hidden costs?</li>
   </ul>
  </div>
 );
};

export default guide;
