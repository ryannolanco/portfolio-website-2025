import testImg from '../../imgs/test-img.jpg';
import About from '../draggable components/about/About';
import NextSteps from '../draggable components/next steps/NextSteps';
import ProjectCollection from '../projects/ProjectCollection';
import placeholder from '../../assets/placeholder.jpg';

const initialItems = [
	{
		id: 'about-draggable',
		content: <About />,
		invisible: false,
		double: false,
	},
	{
		id: 'A',
		content: 'Video1',
		invisible: false,
		double: false,
	},

	{
		id: 'projects-collection-draggable',
		content: 'Projects?',
		invisible: false,
		double: false,
	},
	{
		id: 'B draggable--img',
		content: <img src={placeholder} />,
		invisible: false,
		double: false,
	},
	{
		id: 'next-steps-draggable',
		content: <NextSteps />,
		invisible: false,
		double: false,
	},
	{
		id: 'G',
		content: 'Certifications',
		invisible: false,
		double: false,
	},

	{ id: 'D', content: 'Video2', invisible: false, double: false },
];

export default initialItems;
